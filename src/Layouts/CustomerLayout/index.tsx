import { Outlet } from 'react-router-dom'

// material-ui
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import React from 'react'


// styles
const Main = styled('div')()

// ==============================|| CUSTOMER LAYOUT ||============================== //

const CustomerLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Outlet />
    </Box>
  )
}

export default CustomerLayout
