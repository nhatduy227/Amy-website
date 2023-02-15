import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vi from "./translations/vi.json";
import en from "./translations/en.json";

const listLocales = ["vi", "en"];
const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

const getLocaleLocal = () => {
  const locale = localStorage.getItem("locale")?.toString();
  if (locale && listLocales.includes(locale)) {
    return locale;
  }
  return "vi";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLocaleLocal(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
