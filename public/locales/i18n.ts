// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/translation.json';
import ar from './ar/translation.json';


const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
// Initialize i18next
i18n
  .use(HttpBackend) // Load translations from local files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Integrate with React
  .init({
    fallbackLng: 'en', // Default language if detection fails
    debug: true, // Optional: log debugging information
    resources,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;