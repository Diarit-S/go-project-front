import { Dispatch, SetStateAction } from 'react'

export interface AppCtxType {
  isMenuOpen: boolean
  selectedMenuItem: string
  toggleMenu: () => void
  selectMenuItem: (item: string) => void
}
