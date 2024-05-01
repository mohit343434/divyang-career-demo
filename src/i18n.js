import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    // interpolation: {
    //     escapeValue: false, // not needed for react as it escapes by default
    // },
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome to divyang Portal",
          description: {
            line1: "Private, Government and NGO Jobs for you!",
            line2: "Features for Diyangjan Candidate"
          }
        }
      },
      hi: {
        translation: {
          greeting: "नमस्कार, दिव्यांग पोर्टल में आपका स्वागत है |",
          description: {
            line1: "आपके लिए निजी, सरकारी और एनजीओ नौकरियां!",
            line2: "दिव्यांगजन उम्मीदवार के लिए सुविधाएँ"
          }
        }
      },
      bho: {
        translation: {
          greeting: "नमस्कार, दिव्यांग पोर्टल पर राउर स्वागत बा।",
          description: {
            line1: "रउरा खातिर निजी, सरकारी आ गैर सरकारी संगठन के नौकरी!",
            line2: "पीडब्ल्यूडी के उम्मीदवारन खातिर सुविधा दिहल गइल"
          }
        }
      }
    }
  });

export default i18n;
