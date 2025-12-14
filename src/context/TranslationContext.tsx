import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SUPPORTED_LANGUAGES, Language } from '../services/translationService';

interface TranslationContextType {
  userLanguage: Language;
  setUserLanguage: (language: Language) => void;
  supportedLanguages: Language[];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [userLanguage, setUserLanguageState] = useState<Language>(() => {
    // Get from sessionStorage or default to English
    const stored = sessionStorage.getItem('userLanguage');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return parsed;
      } catch {
        const lang = SUPPORTED_LANGUAGES.find(l => l.name === stored);
        return lang || SUPPORTED_LANGUAGES[0];
      }
    }
    return SUPPORTED_LANGUAGES[0]; // Default to English
  });

  const setUserLanguage = (language: Language) => {
    setUserLanguageState(language);
    sessionStorage.setItem('userLanguage', JSON.stringify(language));
  };

  // Load language from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem('userLanguage');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUserLanguageState(parsed);
      } catch {
        const lang = SUPPORTED_LANGUAGES.find(l => l.name === stored);
        if (lang) {
          setUserLanguageState(lang);
        }
      }
    }
  }, []);

  return (
    <TranslationContext.Provider
      value={{
        userLanguage,
        setUserLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};


