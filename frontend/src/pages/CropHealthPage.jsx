import React from 'react';
import CropHealthDashboard from '../components/CropHealthDashboard.jsx';

const dummyCropHealthData = {
  dates: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'],
  healthIndex: [75, 80, 85, 90, 87, 92],
  details: [
    { date: '2024-01-01', index: 75, notes: 'Initial planting and growth phase.' },
    { date: '2024-02-01', index: 80, notes: 'Fertilization and irrigation improved health.' },
    { date: '2024-03-01', index: 85, notes: 'Pest control measures taken.' },
    { date: '2024-04-01', index: 90, notes: 'Optimal growth conditions.' },
    { date: '2024-05-01', index: 87, notes: 'Minor pest issues.' },
    { date: '2024-06-01', index: 92, notes: 'Excellent health, ready for harvest.' },
  ],
};

function CropHealthPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="py-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-center">Crop Health Dashboard</h1>
      </header>
      <main>
        <CropHealthDashboard data={dummyCropHealthData} />
      </main>
      <footer className="py-4 border-t text-center mt-4">
        <p>&copy; 2024 Smart Farming Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CropHealthPage;
