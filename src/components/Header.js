import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Get in Touch', to: 'get-in-touch' },
    { name: 'Contact Info', to: 'contact-info' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#003366' }}> {/* Dark blue background */}
        <Toolbar sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
          {/* Logo and Business Name */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/logo1.jpg"
              alt="HandyJ3 Logo"
              sx={{ height: 50, borderRadius: '50%', marginRight: 2 }}
            />
            <Typography
              variant="h6"
              sx={{
                color: '#FF6D16', // Orange text
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              Handy J3
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.to}
                component={Link}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Adjust for navbar height
                sx={{ color: '#FFFFFF', fontWeight: 'bold' }} // Orange text
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#003366' }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          {/* Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.to}
                component={Link}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // Adjust for navbar height
                sx={{ mt: 2 }}
              >
                <ListItemText primary={item.name} sx={{ textAlign: 'center', color: '#FFA500' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
