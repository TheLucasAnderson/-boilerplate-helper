import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './src/locales/pt.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: {
      translation: pt,
    },
  },
});

export default i18n;
