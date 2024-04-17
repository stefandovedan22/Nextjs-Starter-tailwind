import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import LOCALES_EN from "./en/locales";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    lng:"en",
    resources:{
        en:{
            translation: LOCALES_EN,
        },
    }
})