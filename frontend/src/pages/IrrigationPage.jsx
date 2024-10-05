import React, { useState, useEffect } from 'react';
import IrrigationDashboard from '../components/IrrigationDashboard';

function IrrigationPage() {
  const [irrigationData, setIrrigationData] = useState(null);

  useEffect(() => {
    // Fetch irrigation data from your API
    const fetchIrrigationData = async () => {
      try {
        const response = await fetch('/api/irrigation');
        const data = await response.json();
        setIrrigationData(data);
      } catch (error) {
        console.error('Error fetching irrigation data:', error);
      }
    };

    fetchIrrigationData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Irrigation Management</h1>
      {irrigationData ? (
        <IrrigationDashboard data={irrigationData} />
      ) : (
        <p>Loading irrigation data...</p>
      )}
    </div>
  );
}

export default IrrigationPage;