import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import id from "./locales/id";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: import.meta.env.NODE_ENV !== "production",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
