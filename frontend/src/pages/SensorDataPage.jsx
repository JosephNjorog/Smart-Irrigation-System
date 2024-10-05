import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { getSensorData } from '../utils/api'; // Assuming there's an endpoint for sensor data

const SensorDataPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSensorData();
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
        Sensor Data Dashboard
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper>
              <Typography variant="h6" component="h3">
                Sensor ID: {item.sensor_id}
              </Typography>
              <Typography>Temperature: {item.temperature}</Typography>
              <Typography>Humidity: {item.humidity}</Typography>
              <Typography>Timestamp: {item.timestamp}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SensorDataPage;
