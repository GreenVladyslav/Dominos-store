import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(new LanguageDetector(null, { lookupLocalStorage: 'language' }))
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    debug: true,
    detection: {
      order: ['queryString', 'cookie', 'localStorage'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// логин вход выход
// корзина товаров
// добавление в корзину
