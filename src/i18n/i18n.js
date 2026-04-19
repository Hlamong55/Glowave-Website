import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./locals/en.json"
import bn from "./locals/bn.json"
import hi from "./locals/hi.json"
import es from "./locals/es.json"
import de from "./locals/de.json"
import ar from "./locals/ar.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: { translation: en },
      bn: { translation: bn },
      hi: { translation: hi },
      es: { translation: es },
      de: { translation: de },
      ar: { translation: ar }
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }

  })

export default i18n