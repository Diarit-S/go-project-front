import React from 'react'

import { useState } from 'react'
import { useAuth } from '@/utils/hooks/auth'
import { useNavigate } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material'

// third party
import * as Yup from 'yup'
import { Formik } from 'formik'

// assets
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

//utils
import { getErrorMessage } from '@/utils/errors'
import { doesUserHavePermission } from '@/utils/roles'
import { HTTPMethod } from '@/models/Fetch'

export interface PasswordLoginCredentials {
  eMail: string
  password: string
}
const Login = () => {
  const theme = useTheme()
  const [checked, setChecked] = useState(true)
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const login = async (credentials: PasswordLoginCredentials): Promise<void> => {
    const { eMail, password } = credentials
    const auth = window.btoa(`${eMail}:${password}`)
    const requestHeaders = new Headers({ Authorization: `Basic ${auth}` })
    const requestConfig = { method: HTTPMethod.POST, headers: requestHeaders }
    console.log(import.meta.env)
    console.log(requestConfig)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/login`,
        requestConfig
      )
      // if (!response.ok || [404, 403].includes(response.status)) {
      //   throw new Error('An error occured')
      // }
      const responseData = await response.json()
      const userJwt = responseData.userJwt
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box
        sx={{
          border: '1px solid lightGrey',
          borderRadius: '8px',
          padding: '40px',
          maxWidth: '400px'
        }}>
        <img
          style={{ height: '50px', margin: 'auto', display: 'block', marginBottom: '60px' }}
        />
        <Formik
          initialValues={{
            eMail: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            eMail: Yup.string().max(255).required('Email is required'),
            password: Yup.string().max(255).required('Password is required')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              await login(values)
              setStatus({ success: true })
              setSubmitting(false)
            } catch (err) {
              console.error(err)
              setStatus({ success: false })
              setErrors({ password: getErrorMessage(err) })
              setSubmitting(false)
            }
          }}>
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <FormControl fullWidth error={Boolean(touched.eMail && errors.eMail)}>
                <InputLabel htmlFor="outlined-adornment-email-login">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-login"
                  type="text"
                  value={values.eMail}
                  name="eMail"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email"
                  inputProps={{}}
                />
                {touched.eMail && errors.eMail && (
                  <FormHelperText error id="standard-weight-helper-text-email-login">
                    {errors.eMail}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth error={Boolean(touched.password && errors.password)}>
                <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-login"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  inputProps={{}}
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="standard-weight-helper-text-password-login">
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                  Forgot Password?
                </Typography>
              </Stack>
              {errors.password && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.password}</FormHelperText>
                </Box>
              )}

              <Box sx={{ mt: 2 }}>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary">
                  Sign in
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default Login
