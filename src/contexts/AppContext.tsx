import * as React from 'react'
import { AppCtxType } from '@/models/AppContext'

interface Props {
  children: React.ReactNode;
}

export const AppCtx = React.createContext<AppCtxType | null>(null)

export const AppCtxProvider: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true)
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('')

  const toggleMenu = () => {
    console.log('toggleMenu')
    setIsMenuOpen(!isMenuOpen)
  }
  const selectMenuItem = (item: string) => {
    setSelectedMenuItem(item)
  }

  const contextDefaultValue: AppCtxType = {
    isMenuOpen,
    selectedMenuItem,
    toggleMenu,
    selectMenuItem,
  }

  return <AppCtx.Provider value={contextDefaultValue}>{children}</AppCtx.Provider>
}
