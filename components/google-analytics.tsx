"use client";

import React from "react";
import { useCookieConsent } from "@/context/cookie-consent-context";
import {GoogleAnalytics} from "@next/third-parties/google";

export function GoogleAnalyticsNew() {
  const { hasConsented } = useCookieConsent();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
        { hasConsented && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </>
  );
}
