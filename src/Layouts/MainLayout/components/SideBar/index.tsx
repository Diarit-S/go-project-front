// material-ui
import { useTheme } from '@mui/material/styles'
import { Box, Drawer, useMediaQuery } from '@mui/material'

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar'
import { BrowserView, MobileView } from 'react-device-detect'

// import LogoSection from '../LogoSection'
import { NavGroup } from './NavGroup'

import { menuItems } from '@/menuItems'
import type { MenuItem } from '@/menuItems/models'

import { drawerWidth } from '@/utils/constants'

import { AuthContext } from '@/contexts/AuthContext'


import React from 'react'

// ==============================|| SIDEBAR DRAWER ||============================== //

interface Props {
  drawerOpen: boolean
  drawerToggle: () => void
}

export const Sidebar = ({ drawerOpen, drawerToggle }: Props) => {
  const theme = useTheme()
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const { user } = React.useContext(AuthContext)

  const renderNavItems = () =>
    menuItems
      .filter(
        (navItem: MenuItem) => user?.role === navItem.requiredRole
      )
      .map((menuItem) => <NavGroup key={menuItem.id} item={menuItem} />)

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>{/* <LogoSection /> */}</Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}>
          {renderNavItems()}
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>{renderNavItems()}</Box>
      </MobileView>
    </>
  )

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label="mailbox folders">
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '88px'
            }
          }
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit">
        {drawer}
      </Drawer>
    </Box>
  )
}
