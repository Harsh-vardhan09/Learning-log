import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Component/Button'
import { Input } from './Component/Input'

import OTPagain from './Component/OTPagain'
import Otp from './Component/Otp'
import Otp3 from './Component/Otp3'
import Sidebar from './Component/answers/1stsidebar'

function App() {
  const [sideBar,setSIdeBar]=useState(true);

  return (
    <div className='flex'>
      <SideBar/>
      <MainContent/>
    </div>
   )
}

function SideBar(){
  return(
    <div className='w-96 h-screen bg-red-200' >
    </div>
  )
}

function MainContent(){
  return(
    <div className='w-full '>

      <div className='h-48 bg-black'></div>
      <div className='grid grid-cols-10 gap-8'>
      
        <div className='h-96 rounded-2xl shadow bg-red-200 col-span-2 -translate-y-12 m-8'></div>

        <div className='h-96 rounded-2xl shadow bg-green-200 col-span-5 mt-5'></div>

        <div className='h-96 rounded-2xl shadow bg-yellow-200 col-span-3 m-5'></div>
      </div>

    </div>
   
  )
}

export default App