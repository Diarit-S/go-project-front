import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// material-ui
import { styled, useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, Theme, Toolbar, useMediaQuery } from '@mui/material'

// project imports
// import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import { TheHeader } from './components/TheHeader'
// import Customization from '../Customization';


import React from 'react'


// styles
const Main = styled('div')()

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const location = useLocation()
  const { pathname } = location
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
        }}>
        <Toolbar>
          <TheHeader />
        </Toolbar>
      </AppBar>

      {/* drawer */}

      {/* main content */}
      <Main theme={theme}>
        {/* breadcrumb */}
        {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
        {/* {currentRouteMenuItem && (
          <PageTitleCard
            title={t(currentRouteMenuItem.title)}
            Icon={currentRouteMenuItem.icon}
            color={currentRouteMenuItem.color}
          />
        )} */}
        <Outlet />
      </Main>
    </Box>
  )
}

export default MainLayout
