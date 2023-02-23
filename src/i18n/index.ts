import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enjson from './translations/en.json';
import frjson from './translations/fr.json';
import ptBRjson from './translations/ptBR.json';

i18n.use(initReactI18next).init({
    fallbackLng:'en',
    interpolation:{
        escapeValue:false
    },
    resources:{
        en: enjson,
        fr: frjson,
        ptBR: ptBRjson
    }
})

export default i18n;