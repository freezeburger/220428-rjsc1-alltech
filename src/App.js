import {ViewHome, ViewMessages} from "./components/views";
import {LangContext} from "./components/containers/lang.context";

function App() {
  return (
    <>
      <LangContext.Provider>
        <ViewMessages></ViewMessages>
      </LangContext.Provider>
    </>
  );
}

export default App;
