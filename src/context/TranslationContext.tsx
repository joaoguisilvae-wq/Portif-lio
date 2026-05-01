import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Locale, Translation } from "../types";
import { translations } from "../constants/translations";

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined,
);

interface TranslationProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export const TranslationProvider = ({
  children,
  initialLocale = "pt",
}: TranslationProviderProps) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const copy = translations[locale];

  return (
    <TranslationContext.Provider value={{ locale, setLocale, copy }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslation deve ser usado dentro de um TranslationProvider",
    );
  }
  return context;
};
