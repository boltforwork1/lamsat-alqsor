import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { initializeDirection } from '../utils/direction';

const LANGUAGE_STORAGE_KEY = 'i18nextLng';
const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'ar'] as const;

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<string>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLanguage = (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage as any))
      ? savedLanguage
      : DEFAULT_LANGUAGE;

    setLanguageState(initialLanguage);
    i18n.changeLanguage(initialLanguage);
    initializeDirection(initialLanguage);
  }, [i18n]);

  const setLanguage = (lang: string): void => {
    if (!SUPPORTED_LANGUAGES.includes(lang as any)) return;

    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    i18n.changeLanguage(lang);
    initializeDirection(lang);
  };

  return {
    language,
    setLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES
  };
};
