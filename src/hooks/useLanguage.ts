import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { initializeDirection } from '../utils/direction';

const LANGUAGE_STORAGE_KEY = 'app_language';
const DEFAULT_LANGUAGE = 'en';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState<string>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const initialLanguage = savedLanguage || DEFAULT_LANGUAGE;

    setLanguageState(initialLanguage);
    i18n.changeLanguage(initialLanguage);
    initializeDirection(initialLanguage);
  }, [i18n]);

  const setLanguage = (lang: string): void => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    i18n.changeLanguage(lang);
    initializeDirection(lang);
  };

  return {
    language,
    setLanguage,
    supportedLanguages: [DEFAULT_LANGUAGE]
  };
};
