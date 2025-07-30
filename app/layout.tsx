import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/context/cookie-consent-context";
import { LanguageProvider } from "@/context/language-context";
// import { GoogleAnalytics } from "@/components/google-analytics";
import { VercelAnalytics } from "@/components/vercel-analytics";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { RecaptchaProvider } from "@/components/recaptcha-provider";
import {GoogleAnalytics} from "@next/third-parties/google";
import {GoogleAnalyticsNew} from "@/components/google-analytics";
import ChatWidget from "@/components/chat-widget";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Mosae Web Solutions",
  description:
    "Wij helpen kleine bedrijven met hun online aanwezigheid door het maken en onderhouden van professionele websites.",
  icons: [
    { url: "/16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/32x32.png", sizes: "32x32", type: "image/png" },
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans`}>
        <Suspense fallback={null}>
          <RecaptchaProvider siteKey={RECAPTCHA_SITE_KEY!}>
            <CookieConsentProvider>
              <GoogleAnalyticsNew />
              <LanguageProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <div className="flex min-h-[100dvh] flex-col">
                    <ChatWidget/>
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                  </div>
                  <CookieConsentBanner />
                </ThemeProvider>
              </LanguageProvider>
            </CookieConsentProvider>
          </RecaptchaProvider>
        </Suspense>
        <VercelAnalytics />
      </body>
    </html>
  );
}
