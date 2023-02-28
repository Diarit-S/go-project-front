import * as React from 'react'

import { useAuth } from '../utils/hooks/auth'
import { useLocation, Navigate } from 'react-router-dom'

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { authContext } = useAuth()
  const location = useLocation()

  //TODO Try to log with existing token before redirecting to /login

  if (!authContext.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
