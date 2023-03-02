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
import { Sidebar } from './components/SideBar'

import { AppCtx } from '@/contexts/AppContext'
import { AppCtxType } from '@/models/AppContext'
import { drawerWidth } from '@/utils/constants'


// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }: { theme: Theme; open: boolean }) => ({
    ...{
      backgroundColor: '#e3f2fd',
      width: '100%',
      minHeight: 'calc(100vh - 88px)',
      flexGrow: 1,
      padding: '20px',
      marginTop: '88px',
      marginRight: '20px',
      borderRadius: `8px`
    },
    ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
        marginLeft: -(drawerWidth - 20),
        width: `calc(100% - ${drawerWidth}px)`
      },
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
        width: `calc(100% - ${drawerWidth}px)`,
        padding: '16px',
        marginRight: '10px'
      }
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px'
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px'
      }
    })
  })
)

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const location = useLocation()
  const { pathname } = location
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'))

    // Handle left drawer
  const { isMenuOpen, toggleMenu } = React.useContext(AppCtx) as AppCtxType

  useEffect(() => {
    matchDownMd && isMenuOpen && toggleMenu()
  }, [matchDownMd])


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
          transition: isMenuOpen ? theme.transitions.create('width') : 'none'
        }}>
        <Toolbar>
          <TheHeader handleLeftDrawerToggle={toggleMenu} />
        </Toolbar>
      </AppBar>

       {/* drawer */}
      <Sidebar drawerOpen={isMenuOpen} drawerToggle={toggleMenu} />

      {/* main content */}
      <Main theme={theme} open={isMenuOpen}>
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
