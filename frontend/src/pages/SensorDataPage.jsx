import React from 'react';
import SensorDataVisualization from '../components/SensorDataVisualization.jsx';

const dummySensorData = {
  dates: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'],
  temperature: [22, 23, 25, 24, 26, 27],
  humidity: [55, 60, 65, 63, 62, 64],
  soilMoisture: [30, 35, 40, 38, 36, 39],
  details: [
    { date: '2024-01-01', temperature: 22, humidity: 55, soilMoisture: 30, notes: 'Initial readings.' },
    { date: '2024-02-01', temperature: 23, humidity: 60, soilMoisture: 35, notes: 'Dry conditions.' },
    { date: '2024-03-01', temperature: 25, humidity: 65, soilMoisture: 40, notes: 'Optimal conditions.' },
    { date: '2024-04-01', temperature: 24, humidity: 63, soilMoisture: 38, notes: 'Stable readings.' },
    { date: '2024-05-01', temperature: 26, humidity: 62, soilMoisture: 36, notes: 'Slightly dry.' },
    { date: '2024-06-01', temperature: 27, humidity: 64, soilMoisture: 39, notes: 'Ideal conditions for harvest.' },
  ],
};

function SensorDataPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="py-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-center">Sensor Data Dashboard</h1>
      </header>
      <main>
        <SensorDataVisualization data={dummySensorData} />
      </main>
      <footer className="py-4 border-t text-center mt-4">
        <p>&copy; 2024 Smart Farming Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SensorDataPage;
