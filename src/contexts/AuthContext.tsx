import * as React from 'react'
import { AuthContextType } from '@/models/AuthContext'
import { User } from '@/models/User/user'

export const AuthContext = React.createContext<AuthContextType>(null!)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const value = { user, setUser }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
