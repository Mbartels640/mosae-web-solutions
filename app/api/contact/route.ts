import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

interface RecaptchaResponse {
    success: boolean
    score: number
    action: string
    challenge_ts: string
    hostname: string
    "error-codes"?: string[]
}

async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY

    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY is not configured")
        return { success: false, error: "reCAPTCHA not configured" }
    }

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        })

        const data: RecaptchaResponse = await response.json()

        if (!data.success) {
            console.error("reCAPTCHA verification failed:", data["error-codes"])
            return { success: false, error: "reCAPTCHA verification failed" }
        }

        if (data.action !== "contact_form") {
            console.error("reCAPTCHA action mismatch:", data.action)
            return { success: false, error: "Invalid reCAPTCHA action" }
        }

        const minScore = 0.5
        if (data.score < minScore) {
            console.warn(`reCAPTCHA score too low: ${data.score}`)
            return { success: false, error: "Security verification failed" }
        }

        return { success: true, score: data.score }
    } catch (error) {
        console.error("reCAPTCHA verification error:", error)
        return { success: false, error: "reCAPTCHA verification error" }
    }
}

export async function POST(request: Request) {
    try {
        const { name, company, email, interestedServices, message, recaptchaToken } = await request.json()
        const lang = request.headers.get("language-input")

        // Verify reCAPTCHA token first
        if (!recaptchaToken) {
            return NextResponse.json({ success: false, message: "reCAPTCHA token is required" }, { status: 400 })
        }

        const recaptchaResult = await verifyRecaptcha(recaptchaToken)
        if (!recaptchaResult.success) {
            console.error("reCAPTCHA verification failed:", recaptchaResult.error)
            return NextResponse.json(
                {
                    success: false,
                    message:
                        lang === "nl"
                            ? "Beveiligingsverificatie mislukt. Probeer opnieuw."
                            : "Security verification failed. Please try again.",
                },
                { status: 400 },
            )
        }

        // Process services array
        const services = Array.isArray(interestedServices) ? interestedServices.join(", ") : interestedServices || ""

        // Save to Firebase with reCAPTCHA score
        const docRef = await addDoc(collection(db, "contact-submissions"), {
            name,
            email,
            company,
            services,
            message,
            timestamp: serverTimestamp(),
            status: "new",
            lang: lang || "en",
            recaptchaScore: recaptchaResult.score,
            ipAddress: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",
        })

        console.log("Contact form submission saved:", {
            docId: docRef.id,
            email,
            company,
            recaptchaScore: recaptchaResult.score,
            lang,
            timestamp: new Date().toISOString(),
        })

        return Response.json({
            success: true,
            message: lang === "nl" ? "Bericht succesvol verzonden!" : "Message sent successfully!",
        })
    } catch (error) {
      console.error("Fout bij verwerken contactformulier:", error);

      // Return localized error message
      const lang = request.headers.get("language-input");
      const errorMessage =
        lang === "nl"
          ? "Interne serverfout. Probeer het later opnieuw."
          : "Internal server error. Please try again later.";

      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 500 },
      );
    }
}
