import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [counterVisible,setCounterVisible]=useState(true);
  useEffect(function(){
    setInterval(function (params) {
      setCounterVisible(c=>!c)
      
    },5000)
  },[])

  return (
          <div>hi there
            { counterVisible && <Counter></Counter>}
            hello
          </div>
  ) 
}

function Counter(){

  const [count,setCount]=useState(0);

  // let increaseCount=()=>{
  //   setCount(count + 1);
  // }

  useEffect(function(){

  
      console.log("on mount")

      //mounting
      let clock=setInterval(() => {
        setCount(count => count + 1)
        console.log("inside interval")

    }, 1000);


    //unMounting
    return function () {
      console.log("unMount")
      clearInterval(clock);
    }

  },[])

  

  // let decreaseCount=()=>{
  //   setCount(count - 1);
  // }

  // let resetCount=()=>{
  //   setCount(0);
  // }

  return(
    <div>
      <h1>{count}</h1>
      
    </div>
  )
}
export default App
