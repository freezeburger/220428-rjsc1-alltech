import {ViewHome, ViewMessages} from "./components/views";
import {LangContext, setLang} from "./components/containers/lang.context";
import React from "react";
import { ApiClient } from "./core/utils";

ApiClient.read('users').then(console.log)

function App() {

  const [language,setLanguage] = React.useState('fr')

  return (
    <>
      
      <LangContext.Provider value={{messages:setLang( language )}}>
        
          <br /><br /><br />

          <button onClick={() => setLanguage( language === 'fr' ?'uk':'fr')}>
              {language === 'fr' ?'English':'Français'}
          </button>
          <br />
          <ViewMessages></ViewMessages>

      </LangContext.Provider>

    </>
  );
}

export default App;
