import { useState } from 'react'

export default function App() {
const stateVarible=useState(0);
const count=stateVarible[0];
const setCount=stateVarible[1];
    
   function countHandler() {
      setCount(count +1);
  }

  function resetHandler() {
      setCount(0);
  }
    
  return(
    <div>
        <button onClick={countHandler}>
          counter {count}
        </button>
        <button onClick={resetHandler}>
          Reset
        </button>

    </div>
  );
}
