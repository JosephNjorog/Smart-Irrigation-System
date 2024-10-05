import React, { useState, useEffect } from 'react';
import SensorDataVisualization from '../components/SensorDataVisualization';

function SensorDataPage() {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    // Fetch sensor data from your API
    const fetchSensorData = async () => {
      try {
        const response = await fetch('/api/sensor-data');
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Sensor Data</h1>
      {sensorData ? (
        <SensorDataVisualization data={sensorData} />
      ) : (
        <p>Loading sensor data...</p>
      )}
    </div>
  );
}

export default SensorDataPage;