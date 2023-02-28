import React from 'react'
import { doesUserHavePermission } from '@/utils/roles'

import { Navigate } from 'react-router-dom'
import { UserRole } from '@/models/User/user-role-enum'
import { AuthContext } from '@/contexts/AuthContext'

export const RequireRole = ({
  children,
  role
}: {
  children: JSX.Element
  role: UserRole
  }) => {
  
  const authContext = React.useContext(AuthContext)
  console.log(authContext)

   if (!authContext.user) {
    return <Navigate to="/login" replace />
  }

  if (!doesUserHavePermission(authContext.user, role)) {
    //TODO Display a ui error to notify the role that the route is not accessible for him
    return <Navigate to="/login" replace />
  }

  return <>
    <div>test</div>
    {children}
  </>
}
