import { AuthContext } from '@/contexts/AuthContext'
import * as React from 'react'

import { useLocation, Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const authContext =  React.useContext(AuthContext)
  const location = useLocation()

  //TODO Try to log with existing token before redirecting to /login

  if (!authContext.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
