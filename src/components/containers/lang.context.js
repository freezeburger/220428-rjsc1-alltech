import React from "react";

const langs = {
    fr:{
        BUTTON_ADD: "Ajouter",
        BUTTON_SEND: "Envoyer",
    },
    uk:{
        BUTTON_ADD: "Add",
        BUTTON_SEND: "Send",
    }
}

export const setLang = (lang = "fr") => langs[lang] ;

export const  LangContext = React.createContext({
    messages:setLang()
})
LangContext.displayName = "LangContext";