import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelfChanging from './SelfChanging'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SelfChanging/>
    </>
  )
}

export default App
