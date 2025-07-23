import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/context/cookie-consent-context";
import {LanguageProvider} from "@/context/language-context";
import { GoogleAnalytics } from "@/components/google-analytics";
import { VercelAnalytics } from "@/components/vercel-analytics";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mosae Web Solutions",
  description:
    "Wij helpen kleine bedrijven met hun online aanwezigheid door het maken en onderhouden van professionele websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <CookieConsentProvider>
            <LanguageProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <div className="flex min-h-[100dvh] flex-col">
                  <Header />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
                <CookieConsentBanner />
              </ThemeProvider>
            </LanguageProvider>
            <GoogleAnalytics />
          </CookieConsentProvider>
        </Suspense>
        <VercelAnalytics />
      </body>
    </html>
  );
}
