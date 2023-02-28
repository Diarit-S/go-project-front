import { createTheme } from '@mui/material/styles'

// assets
import colors from '../assets/scss/_themes-vars.module.scss'

// project imports
import { componentStyleOverrides } from './compStyleOverride'
import { themePalette } from './palette'
import { themeTypography } from './typography'

// Types
import { ThemeOptions } from '@mui/material'
import { ThemePaletteOptions } from './types'

export const theme = () => {
  const color = colors

  const paletteOptions: ThemePaletteOptions = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.darkLevel3,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.primaryDark,
    menuSelectedBack: color.primaryLight,
    divider: color.grey200
  }

  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: themePalette(paletteOptions),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(paletteOptions)
  }

  const themes = createTheme(themeOptions)
  themes.components = componentStyleOverrides(paletteOptions)

  return themes
}

export default theme
