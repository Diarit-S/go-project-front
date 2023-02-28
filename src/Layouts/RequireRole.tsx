import React from 'react'
import { doesUserHavePermission } from '@/utils/roles'

import { Navigate } from 'react-router-dom'
import { useAuth } from '@/utils/hooks/auth'
import { UserRole } from '@/models/User/user-role-enum'

export const RequireRole = ({
  children,
  role
}: {
  children: JSX.Element
  role: UserRole
  }) => {
  
  const { authContext } = useAuth()

  if (!authContext.user || !doesUserHavePermission(authContext.user, role)) {
    //TODO Display a ui error to notify the role that the route is not accessible for him
    return <Navigate to="/home" replace />
  }

  return children
}
