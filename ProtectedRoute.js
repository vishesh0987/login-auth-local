import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectedRoute = () => {
    const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet/> : <Navigate to={"/Login"}/>
}

export default ProtectedRoute