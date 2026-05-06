import React from 'react'
import Navbar from '../components/Navbar'

const authLayout = ({children}:React.ReactElement) => {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}

export default authLayout
