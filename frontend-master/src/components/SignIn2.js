import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from '../slices/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './Login.css';
import './SignIn.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn2() {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    await axios
      .post('http://localhost:3005/api/v1/hospitals/login', {
        email: data.get('email'),
        password: data.get('password'),
      })
      .then(function (response) {
        console.log(response);
        dispatch(login(response.data));
        window.location.href = '/viewdoctors2';
      })
      .catch(function (error) {
        alert('Error. Try again.');
        console.log(error);
      });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            backgroundColor: 'transparent', // Set the background to transparent
            padding: '20px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SIGN IN AS A PATIENT
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '12px' }}
            >
              Sign In
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '12px' }}
              onClick={() => {
                window.location.href = '/signup2';
              }}
            >
              REGISTER AS PATIENT
            </Button>

            <Grid container xs={12}>
              <Grid item xs={12}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link href="./signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
