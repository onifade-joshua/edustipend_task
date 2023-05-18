import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';



const Navbar = () =>  {
    return (
        <Box>
        <AppBar position="static" style={{ backgroundColor: '#e0e0e0 ' }}>
          <Toolbar sx={{ justifyContent: 'flex-end'}}>
          <Button variant='outlined' sx={{ marginRight: '10px' }}>Contact Us</Button>
          <Button variant='contained' >Sign Up</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
  export default Navbar;
