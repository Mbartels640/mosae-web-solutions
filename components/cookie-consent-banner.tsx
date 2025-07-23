"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCookieConsent } from "@/context/cookie-consent-context";

export function CookieConsentBanner() {
  const { hasConsented, setHasConsented } = useCookieConsent();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(!hasConsented);
  }, [hasConsented]);

  const handleAccept = () => {
    setHasConsented(true);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-secondary text-secondary-foreground shadow-lg animate-in slide-in-from-bottom-5">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm">
            Wij gebruiken cookies om uw ervaring te verbeteren. Door onze
            website te bezoeken, gaat u akkoord met ons gebruik van cookies.
            Lees meer in ons{" "}
            <Link
              href="/cookie-policy"
              className="font-bold underline hover:text-primary"
            >
              cookiebeleid
            </Link>
            .
          </p>
          <Button onClick={handleAccept} size="sm">
            Accepteren
          </Button>
        </div>
      </div>
    </div>
  );
}
