import React, { useState, useEffect } from 'react';
import CropHealthDashboard from '../components/CropHealthDashboard.jsx';

function CropHealthPage() {
  const [cropHealthData, setCropHealthData] = useState(null);

  useEffect(() => {
    // Fetch crop health data from your API
    const fetchCropHealthData = async () => {
      try {
        const response = await fetch('/api/crop-health');
        const data = await response.json();
        setCropHealthData(data);
      } catch (error) {
        console.error('Error fetching crop health data:', error);
      }
    };

    fetchCropHealthData();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Crop Health Monitoring</h1>
      {cropHealthData ? (
        <CropHealthDashboard data={cropHealthData} />
      ) : (
        <p>Loading crop health data...</p>
      )}
    </div>
  );
}

export default CropHealthPage;