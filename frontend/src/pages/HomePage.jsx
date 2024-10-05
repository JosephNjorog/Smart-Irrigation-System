import React from 'react';
import { Container, Typography } from '@mui/material';
import ArcGISMap from '../components/ArcGISMap';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Smart Irrigation and Crop Monitoring System
      </Typography>
      <ArcGISMap />
    </Container>
  );
};

export default HomePage;
