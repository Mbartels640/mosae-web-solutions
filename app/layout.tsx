import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "@/context/cookie-consent-context";
import { GoogleAnalytics } from "@/components/google-analytics";
import { VercelAnalytics } from "@/components/vercel-analytics";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Web Studio | Websites voor Kleine Ondernemers in Limburg",
  description:
    "Wij helpen kleine bedrijven met hun online aanwezigheid door het maken en onderhouden van professionele websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <CookieConsentProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
            <GoogleAnalytics />
          </CookieConsentProvider>
        </Suspense>
        <VercelAnalytics />
      </body>
    </html>
  );
}
