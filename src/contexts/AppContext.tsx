import * as React from 'react'
import { AppCtxType } from 'models/AppContext'

export const AppCtx = React.createContext<AppCtxType | null>(null)

export const AppCtxProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true)
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('')
  const [userSettings, setUserSettings] = React.useState<Setting[]>([])
  const [userFeatures, setUserFeatures] = React.useState<Feature[]>([])
  const [userCompany, setUserCompany] = React.useState<Company | null>(null)

  const toggleMenu = () => {
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
    userSettings,
    setUserSettings,
    userFeatures,
    setUserFeatures,
    userCompany,
    setUserCompany
  }

  return <AppCtx.Provider value={contextDefaultValue}>{children}</AppCtx.Provider>
}
