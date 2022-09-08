import ButtonComponent from "./ButtonComponent";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import "./App.css";
import {  useCallback, useState } from "react";


function App() {
  const [stateOne , setStateOne] = useState(false)
  const [stateTwo , setStateTwo] = useState(false)

  const funcOne = useCallback(() => {
     setStateOne(!stateOne)},[stateOne])

  const funcTwo = useCallback(()=>{
    setStateTwo(!stateTwo)},[stateTwo])
  return (
   <>
   <section>
     <h1>How To Avoid Re-Render React Component</h1>
     <div className="flex">
          <div>
            <ComponentOne stateOne={stateOne}/>
            <ButtonComponent  component="One" click={funcOne}/>
          </div>
          <div>
            <ComponentTwo stateTwo={stateTwo}/>
            <ButtonComponent  component="Two" click={funcTwo}/>
          </div>
     </div>
   </section>
   </>
  );
}

export default App;
