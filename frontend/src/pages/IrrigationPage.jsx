import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { getIrrigationData } from '../utils/api';

const IrrigationPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getIrrigationData();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Irrigation Dashboard
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper>
              <Typography variant="h6" component="h3">
                Field ID: {item.field_id}
              </Typography>
              <Typography>Water Level: {item.water_level}</Typography>
              <Typography>Soil Moisture: {item.soil_moisture}</Typography>
              <Typography>Timestamp: {item.timestamp}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default IrrigationPage;
