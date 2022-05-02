import {ViewHome, ViewMessages} from "./components/views";
import {LangContext, setLang} from "./components/containers/lang.context";

function App() {
  return (
    <>
      <LangContext.Provider value={{messages:setLang()}}>
        <ViewMessages></ViewMessages>
      </LangContext.Provider>
    </>
  );
}

export default App;
