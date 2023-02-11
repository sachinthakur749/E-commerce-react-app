import React from 'react'
import Navbar from './Navbar'

const Account = () => {

     const localSignup = localStorage.getItem("signup");

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Account