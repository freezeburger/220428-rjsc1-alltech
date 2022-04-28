import React from "react";
import ClassComponent from "./theory/1.ClassComponent";
import FunctionalComponent from "./theory/1.FunctionalComponent";
import FunctionalComponentWithMechanics from "./theory/1.FunctionalComponentWithMechanics";
import FunctionalFecth from "./theory/2.FunctionalFecth";
import FunctionalWithHooks from "./theory/3.CustomHooks/FunctionalWithHooks";



function App() {
  return (
    <>
    {/*       
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <FunctionalComponentWithMechanics/>
      <FunctionalFecth id={1}/> 
      */}
      <FunctionalWithHooks id={1}/> 
      </>
  );
}

export default App;
