
import React  from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function ProtectedRoute(props) {

    
    return (
      props.auth!==false? <Outlet/> : <Navigate to='/'/>
    )
  
    
}

export default ProtectedRoute