import { Box } from '@mui/material'
import React from 'react'

export const ConfigurationLayout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
      {children.map((child) => child)}
    </Box>
  )
}
