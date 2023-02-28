// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase } from '@mui/material'

// project imports
// import LogoSection from '../LogoSection';
// import SearchSection from './SearchSection';
// import ProfileSection from './ProfileSection';
// import NotificationSection from './NotificationSection';

import { Link } from 'react-router-dom'

import ProfileSection from './Profile'

import React from 'react'

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

export const TheHeader = () => {
  const theme = useTheme()

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}>
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <Link to="/home">
          </Link>
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              transition: 'all .2s ease-in-out',
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              '&:hover': {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light
              }
            }}
            color="inherit">
          </Avatar>
        </ButtonBase>
      </Box>
      {/* header search */}
      {/* // <SearchSection /> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      {/* notification & profile */}
      {/* // <NotificationSection /> */}
      <ProfileSection />
    </>
  )
}
