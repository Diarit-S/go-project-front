import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, StyledEngineProvider } from '@mui/material'

// defaultTheme
import themes from './themes'

// project imports
import NavigationScroll from './Layouts/NavigationScroll'

// Contexts
// import { RegisterFormProvider } from './views/Register/RegisterContext'

// routing
import Routes from './routes'

import './App.css'

function App() {
  return (
    <Router>
      <StyledEngineProvider>
        <ThemeProvider theme={themes()}>
          <CssBaseline />
          <div className="App">
            <NavigationScroll>
              <Routes />
            </NavigationScroll>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </Router>
  )
}

export default App
