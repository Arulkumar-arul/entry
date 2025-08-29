import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'

function ProtectedRoutes({childern}) {
  const user = useSelector(LoggedUser=> LoggedUser.user);
  return user ? childern : <Navigate to="/login" />
}

export default ProtectedRoutes