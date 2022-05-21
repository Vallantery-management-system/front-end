import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranslationEn from './locales/en/en.json';
import TranslationFr from './locales/fr/fr.json';
import TranslationDe from './locales/de/de.json';
import TranslationEs from './locales/es/es.json';
import TranslationRu from './locales/rus/ru.json';
import TranslationAm from './locales/arm/arm.json';
import TranslationVMS from './locales/vms/vms.json';


const fallbackLng = ['arm'];
const availableLanguages = ['arm', 'en', 'de', 'fr', 'es',  'rus', 'vms' ];

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: { translation: TranslationEn },
      arm:{ translation: TranslationAm },
      fr: { translation: TranslationFr },
      de: { translation: TranslationDe },
      es: { translation: TranslationEs },
      ru: { translation: TranslationRu },
      vms: { translation: TranslationVMS }

    },
    fallbackLng, // fallback language is english.
    detection: {
      checkWhitelist: true, // options for language detection
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  }
);

export default i18n;
