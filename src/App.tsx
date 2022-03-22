import React, { useState } from "react";
import { Child } from "./child";

function App() {
  let handleClick = () => { };
  const [ trigger, setTrigger ] = useState(false);

  const hitTrigger = (): void => {
    setTrigger(!trigger);
  };

  return (
    <div className="App">
      <Child
        toggle={ (toggle: () => void) => {
          handleClick = toggle;
        } }
        trigger={ trigger }
      />
      <button onClick={ () => handleClick() }>Toggle Hello World</button>
      <button onClick={ () => hitTrigger() }>Toggle Hello Universe</button>
    </div>
  );
}

export default App;
