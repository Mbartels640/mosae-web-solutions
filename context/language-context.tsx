"use client";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import type { Language } from "@/lib/content";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("nl");

  useEffect(() => {
    // Get language from localStorage on mount
    const savedLang = localStorage.getItem("preferred_language") as Language;
    if (savedLang && ["nl", "de", "en"].includes(savedLang)) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    localStorage.setItem("preferred_language", newLang);
    setLangState(newLang);
  };

  const contextValue = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  //
  return context;
}
