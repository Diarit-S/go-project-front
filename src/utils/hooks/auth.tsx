import * as React from 'react'

import { AuthContext } from '@/contexts/AuthContext'
import { doesUserHavePermission } from '@/utils/roles' 

export const useAuth = () => {
  const authContext = React.useContext(AuthContext)

  const login = async (userJWT: string, companyId: string) => {
    const myHeaders = new Headers({ Authorization: `Bearer ${userJWT}` })
    const requestConfig = { headers: myHeaders }
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ALOBEES_API_URL}/auth/company/${companyId}`,
        requestConfig
      )
      const responseData = await response.json()
      if (response.ok) {
        localStorage.setItem('userJwt', userJWT)
        localStorage.setItem('jwt', responseData.jwt)
        sessionStorage.setItem('jwt', responseData.jwt)

        authContext.setUser(responseData.user)
      }
    } catch (error) {
      // TODO Handle error correctly
      console.log(error)
    }
  }

  const logout = async () => {
    localStorage.removeItem('jwt')
    localStorage.removeItem('userJwt')
    localStorage.removeItem('companyId')
    sessionStorage.clear()
  }

  return { authContext, login, logout }
}
