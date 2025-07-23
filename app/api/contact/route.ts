import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Hier zou je de logica toevoegen om de e-mail te versturen
        // of de data op te slaan in een database.
        // Voor nu loggen we de data naar de server console.
        console.log("Nieuw contactformulier ingediend:")
        console.log("Naam:", body.name)
        console.log("Bedrijfsnaam:", body.company)
        console.log("Diensten:", body.interestedServices.join(", "))
        console.log("Bericht:", body.message)

        return NextResponse.json({ message: "Bericht succesvol ontvangen!" }, { status: 200 })
    } catch (error) {
        console.error("Fout bij verwerken contactformulier:", error)
        return NextResponse.json({ message: "Interne serverfout" }, { status: 500 })
    }
}
