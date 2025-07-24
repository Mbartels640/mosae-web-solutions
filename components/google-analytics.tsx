"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/context/cookie-consent-context";
import Script from "next/script";

export function GoogleAnalytics() {
  const { hasConsented } = useCookieConsent();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  useEffect(() => {
    if (hasConsented && GA_MEASUREMENT_ID) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }, [hasConsented, GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
          });
          
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
