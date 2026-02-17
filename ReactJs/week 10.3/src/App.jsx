import { useContext, useState ,createContext} from 'react'
import './App.css'

const bulbContext=createContext();

function BulbProvider({children}){

  const [bulbOn,setBulbOn]=useState(true);

  return <bulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
        {children}
    </bulbContext.Provider>
} 


function App() {
  
  return (
   <div> 
    <BulbProvider>
      <Light/>
    </BulbProvider>
   </div>
  )
}

function Light(){
  

  return <div>
      <LightBulb />
      < LightSwitch /> 
  </div>
}

function LightBulb(){

  const {bulbOn}=useContext(bulbContext)
  return (
    <div>
      {bulbOn? "bulb on" : "bulb off"}
    </div> 
  )
}

function LightSwitch(){
  const {setBulbOn}=useContext(bulbContext)
   
  function toggle(){
    setBulbOn(currentState=>!currentState);
    console.log("off");
    
  }

  return (
  <div>
    <button onClick={toggle}>toggle</button>
  </div>)
}

export default App
