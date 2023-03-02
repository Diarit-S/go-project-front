import { Outlet } from 'react-router-dom'

// material-ui
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import React from 'react'

// styles
const Main = styled('div')()

// ==============================|| CUSTOMER LAYOUT ||============================== //

const CompanyLayout = () => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: 'lightblue', padding: '30px', flexDirection: 'column'}}>
      <Outlet />
    </Box>
  )
}

export default CompanyLayout
