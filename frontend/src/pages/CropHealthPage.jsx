import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, CircularProgress } from '@mui/material';
import { getCropHealthData } from '../utils/api';

const CropHealthPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCropHealthData();
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
        Crop Health Dashboard
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper>
              <Typography variant="h6" component="h3">
                Field ID: {item.field_id}
              </Typography>
              <Typography>Health Index: {item.health_index}</Typography>
              <Typography>Pest Presence: {item.pest_presence ? 'Yes' : 'No'}</Typography>
              <Typography>Timestamp: {item.timestamp}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CropHealthPage;
