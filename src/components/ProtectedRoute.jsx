import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({children}) => {

    const localSignup = localStorage.getItem("signup")

  if(!localSignup){
    return <Navigate to='/' />
  }else{
    return children
  }

}

export default ProtectedRoute