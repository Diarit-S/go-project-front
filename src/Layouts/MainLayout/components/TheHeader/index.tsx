// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase } from '@mui/material'

import { Link } from 'react-router-dom'

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

interface Props {
  handleLeftDrawerToggle: () => void
}

export const TheHeader = ({ handleLeftDrawerToggle }: Props) => {
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
            color="inherit"
            onClick={handleLeftDrawerToggle}
          >
            
          </Avatar>
        </ButtonBase>
      </Box>
      {/* header search */}
    </>
  )
}
