import { isValidPassword, isValidUserMail, User } from '@/models/User/user';
import { UserRole } from '@/models/User/user-role-enum';
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from "@mui/material";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {

// #region usestate 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState<UserRole>(UserRole.USER);
  const [errorMessage, setErrorMessage] = useState("");
// #endregion usestate

// #region handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const userToSubmit: User = {email, password, firstName, lastName, role};

    if(!isValidUserMail(userToSubmit)) {
      setErrorMessage("L'email est invalide");
      return;
    }

    if(!isValidPassword(userToSubmit)) {
      setErrorMessage("Le mail est invalide");
      return;
    }

    registerUser(userToSubmit);

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setRole(UserRole.USER);
  };

  const handleRoleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setRole(event.target.value as UserRole);
  };
// #endregion handler

// #region API call
  const registerUser = (user: User): void => {
    fetch('', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then((response) => {
      if (!response.ok) {
        setErrorMessage("Failed to send user data.");
      }
      console.log("User data sent successfully.");
    })
    .catch((error) => {
      console.error(error);
    });
  }
  // #endregion API call

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column" }}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            id="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            id="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <FormControl fullWidth>
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
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
