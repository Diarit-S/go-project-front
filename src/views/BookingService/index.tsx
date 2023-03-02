import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React from "react"



export const BookingService = () => {

  const handleSubmit = () => {
    console.log('submit')
  }

  const [title, setTitle] = React.useState<string>('')

  return (
    <>
      <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column" }}>
        <Typography component="h1" variant="h5">
          Modifier le service
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {/* <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          /> */}
          {/* <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={handleRoleChange}
            >
              <MenuItem value={UserRole.USER}>Utilisateur</MenuItem>
              <MenuItem value={UserRole.EMPLOYEE}>Employeur</MenuItem>
            </Select>
          </FormControl>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enregistrer les changements
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  )
}
