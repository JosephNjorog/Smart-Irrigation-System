import React, { useState, useEffect } from 'react';
import IrrigationDashboard from '../components/IrrigationDashboard';
import './IrrigationStyles.css';

function IrrigationPage() {
  const [irrigationData, setIrrigationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching irrigation data
    const fetchIrrigationData = () => {
      const dummyData = {
        waterUsage: 1200, // in gallons
        soilMoisture: 45, // in percentage
        nextIrrigation: 'Tomorrow at 10:00 AM',
        schedule: [
          { day: 'Monday', startTime: '08:00 AM', duration: 30 },
          { day: 'Wednesday', startTime: '08:00 AM', duration: 30 },
          { day: 'Friday', startTime: '08:00 AM', duration: 30 },
        ],
      };
      setIrrigationData(dummyData);
      setLoading(false);
    };

    fetchIrrigationData();
  }, []);

  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-5xl font-bold mb-6 text-center text-green-700">Irrigation Management</h1>
      {loading ? (
        <div className="text-lg text-center">Loading irrigation data...</div>
      ) : (
        <IrrigationDashboard data={irrigationData} />
      )}
    </div>
  );
}

export default IrrigationPage;
