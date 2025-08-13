import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  // this is for handling a success full route for login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        background: 'linear-gradient(to right, #1e3c72, #2a5298)',
      }}
    >
      {/* Left Side - Login Form */}
      <Box
        component={Paper}
        elevation={6}
        square
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: { xs: 4, sm: 8 },
          py: 6,
          borderRadius: '0px',
        }}
  >

    <Tabs
      value={0} // '0' is Sign In
      textColor="primary"
      indicatorColor="primary"
      onChange={(event, newValue) => {
        if (newValue === 0) {
          navigate('/login'); // Sign In route
        } else if (newValue === 1) {
          navigate('/'); // Register route
        }
      }}
    >
      <Tab label="Sign In" />
      <Tab label="Register" />
    </Tabs>

    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>

      <TextField
        label="Email"
        placeholder="Enter Your Email"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <TextField
        label="Password"
        placeholder="Enter Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3, py: 1.5, backgroundColor: '#1ca3ec' }}
      >
        Login
      </Button>
    </Box>
  </Box>

      {/* Right Side - Welcome */}
      <Box
        sx={{
          width: '50%',
          background: `url('https://wallpaperaccess.com/full/1178183.jpg') center/cover no-repeat`,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#111111',
          textAlign: 'center',
          px: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome Back
        </Typography>
        <Typography variant="body1" maxWidth="400px">
          Please login to continue to your dashboard and access exclusive features.
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
