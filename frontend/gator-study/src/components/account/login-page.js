import * as React from 'react';
import {Redirect} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link2 from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link2 color="inherit" href="https://mui.com/">
        Your Website
      </Link2>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
        password
      })
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/"/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <IconButton color="inherit" component={Link} to="/">
                <AccountCircleIcon/> 
                {/* change this to app icon */}
            </IconButton>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              onChange = {e => setEmail(e.target.value)}
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
              onChange = {e=> setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link2 href="#" variant="body2">
                  Forgot password?
                </Link2>
              </Grid>
              <Grid item>
                <Link2 href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link2>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}