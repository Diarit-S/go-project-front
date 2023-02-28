// material-ui
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

import React from 'react'

// styles
const LoaderWrapper = styled('div')({
  width: '100%'
})

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <LoaderWrapper>
    <CircularProgress color="primary" />
  </LoaderWrapper>
)

export default Loader
