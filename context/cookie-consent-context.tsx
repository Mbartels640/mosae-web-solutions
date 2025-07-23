"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

interface CookieConsentContextType {
  hasConsented: boolean;
  setHasConsented: (hasConsented: boolean) => void;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsented, setHasConsentedState] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent") === "true";
    setHasConsentedState(consent);
  }, []);

  const setHasConsented = (consent: boolean) => {
    localStorage.setItem("cookie_consent", String(consent));
    setHasConsentedState(consent);
  };

  const contextValue = useMemo(
    () => ({ hasConsented, setHasConsented }),
    [hasConsented],
  );

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider",
    );
  }
  return context;
}
