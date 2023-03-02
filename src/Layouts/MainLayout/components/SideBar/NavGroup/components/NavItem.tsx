import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppCtx } from '@/contexts/AppContext'
import { AppCtxType } from '@/models/AppContext'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery
} from '@mui/material'
import { styled } from '@mui/material/styles'

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import React from 'react'

// Types
import { MenuItem } from '@/menuItems/models'

import { useTranslation } from 'react-i18next'

import { useLocation } from 'react-router-dom'

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

interface Props {
  item: MenuItem
  level: number
}

export const NavItem = ({ item, level }: Props) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'))
  const location = useLocation()

  const { isMenuOpen, toggleMenu, selectedMenuItem, selectMenuItem } = React.useContext(
    AppCtx
  ) as AppCtxType

  React.useEffect(() => {
    if (item.url === location.pathname) {
      selectMenuItem(item.id)
    }
  }, [location])


  const itemHandler = (id: string) => {
    selectMenuItem(id)
    matchesSM && isMenuOpen && toggleMenu()
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id.toString())
    if (currentIndex > -1) {
      selectMenuItem(item.id)
    }
    // eslint-disable-next-line
    }, []);

  return (
    <ListItemButton
      component={Link}
      to={`${item.url}`}
      sx={{
        borderRadius: `8px`,
        mb: 0.5,
        alignItems: 'center',
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={selectedMenuItem === item?.id}
      onClick={() => itemHandler(item.id)}>
      <ListItemText
        primary={
          <Typography
            variant={selectedMenuItem === item?.id ? 'h5' : 'body1'}
            color="inherit"
            sx={{ fontWeight: '500' }}>
            {t(item.title)}
          </Typography>
        }
      />
      {item.color && <ColorDot color={item.color} />}
    </ListItemButton>
  )
}

const ColorDot = styled('div')<{
  color: string
}>`
  height: 10px;
  width: 10px;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`
