import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smart Irrigation and Crop Monitoring
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/irrigation">Irrigation</Button>
        <Button color="inherit" component={Link} to="/crop-health">Crop Health</Button>
        <Button color="inherit" component={Link} to="/sensor-data">Sensor Data</Button
