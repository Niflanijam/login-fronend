import React, { useState } from 'react';
import axios from 'axios';

import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState('');

  const handleUsernameChange = (e) => {
  const value = e.target.value;
  setForm({ ...form, username: value });

  const noNumbersRegex = /^[^0-9]*$/;

  if (!noNumbersRegex.test(value)) {
    setUsernameError('Username cannot contain numbers.');
  } else {
    setUsernameError('');
  }
};

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, password: value });

    if (!passwordRegex.test(value)) {
      setError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
    } else {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error) {
      alert('Please fix errors before submitting.');
      return;
    }
    if (!form.password) {
      alert('Password is required.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered successfully!');
      navigate('/login'); // maybe redirect to login after successful register
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
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
      {/* Left Side - Welcome */}
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
          Welcome Page
        </Typography>
        <Typography variant="body1" maxWidth="400px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra lacinia maximus.
        </Typography>
      </Box>

      {/* Right Side - Register Form */}
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
          value={1} // '1' is Register tab active
          textColor="primary"
          indicatorColor="primary"
          onChange={(e, newValue) => {
            if (newValue === 0) navigate('/login'); // Sign In tab
          }}
        >
          <Tab label="Sign In" />
          <Tab label="Register" />
        </Tabs>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>

         <TextField
  label="Full Name"
  placeholder="Enter Your Full Name"
  variant="outlined"
  fullWidth
  margin="normal"
  value={form.username}
  onChange={handleUsernameChange}
  error={Boolean(usernameError)}
  helperText={usernameError}
/>
         
         
         
         
         
         
         
         

          <TextField
            label="Email"
            placeholder="Enter Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <TextField
            label="Password"
            placeholder="Enter password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={form.password}
            onChange={handlePasswordChange}
            error={Boolean(error)}
            helperText={error}
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <Typography variant="body2">
                I agree to all the statements in{' '}
                <Typography component="span" color="primary" fontWeight="bold">
                  Terms of service
                </Typography>
              </Typography>
            }
            sx={{ mt: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5, backgroundColor: '#1ca3ec' }}
            disabled={Boolean(error)}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
