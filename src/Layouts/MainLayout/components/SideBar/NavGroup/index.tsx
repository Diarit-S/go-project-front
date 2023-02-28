import { Box, Divider, List, Typography } from '@mui/material'

// project imports
import { NavItem } from './components/NavItem'

// Types
import { MenuItem } from 'menuItems/models'

import { useTranslation } from 'react-i18next'

import React from 'react'

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

interface Props {
  item: MenuItem
}

export const NavGroup = ({ item }: Props) => {
  const { t } = useTranslation()
  return (
    <Box sx={{ marginBottom: '15px' }}>
      {item.children?.map((navItem) => {
        return <NavItem key={navItem.id} item={navItem} level={1} />
      })}
    </Box>
  )
}
