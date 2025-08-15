
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Box,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Edit as EditIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Visibility as DisplayIcon,
  ExitToApp as LogoutIcon,
  PersonAdd as AddAccountIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState("John Doe");

  // Update username from localStorage
  const updateUserName = () => {
    const storedName = localStorage.getItem("username");
    setUserName(storedName || "John Doe");
  };

  useEffect(() => {
    updateUserName();
    window.addEventListener("usernameChange", updateUserName);
    return () => window.removeEventListener("usernameChange", updateUserName);
  }, []);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.dispatchEvent(new Event("usernameChange"));
    navigate("/login");
  };

  const handleEditProfile = () => navigate("/profile/edit");
  const handleSettings = () => navigate("/settings");
  const handleHelp = () => navigate("/help");
  const handleDisplay = () => navigate("/display");
  const handleAddAccount = () => navigate("/");

  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#333", minHeight: 80, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + Site Name */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          <img src="./logo12.png" alt="HealthyD@.ai Logo" style={{ height: 50, marginRight: 15 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            HealthyD@.ai
          </Typography>
        </Box>

        {/* Profile Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{userName}</Typography>
          <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
            <Avatar 
              alt={userName} 
              sx={{ 
                width: 48, 
                height: 48,
                bgcolor: '#5D0E0E',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}
            >
              {userName.split(' ').map(n => n[0]).join('')}
            </Avatar>
          </IconButton>
        </Box>

        {/* Profile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))',
              mt: 1.5,
              minWidth: 220,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          <MenuItem disabled sx={{ py: 1.5, opacity: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold">{userName}</Typography>
          </MenuItem>
          <Divider />
          
          <MenuItem onClick={handleEditProfile} sx={{ py: 1.5 }}>
            <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Edit Profile</ListItemText>
          </MenuItem>
          
          <MenuItem onClick={handleSettings} sx={{ py: 1.5 }}>
            <ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Settings & Privacy</ListItemText>
          </MenuItem>
          
          <MenuItem onClick={handleHelp} sx={{ py: 1.5 }}>
            <ListItemIcon><HelpIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Help & Support</ListItemText>
          </MenuItem>
          
          <MenuItem onClick={handleDisplay} sx={{ py: 1.5 }}>
            <ListItemIcon><DisplayIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Display & Accessibility</ListItemText>
          </MenuItem>
          
          <Divider />
          
          <MenuItem onClick={handleAddAccount} sx={{ py: 1.5 }}>
            <ListItemIcon><AddAccountIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Add another account</ListItemText>
          </MenuItem>
          
          <MenuItem onClick={handleLogout} sx={{ py: 1.5 }}>
            <ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}