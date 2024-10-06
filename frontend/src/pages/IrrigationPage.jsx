import React from 'react';
import IrrigationDashboard from '../components/IrrigationDashboard.jsx';

const dummyIrrigationData = {
  dates: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01'],
  waterUsage: [500, 600, 550, 700, 650, 600],
  details: [
    { date: '2024-01-01', usage: 500, notes: 'Initial irrigation phase.' },
    { date: '2024-02-01', usage: 600, notes: 'Increased due to dry conditions.' },
    { date: '2024-03-01', usage: 550, notes: 'Stable water usage.' },
    { date: '2024-04-01', usage: 700, notes: 'High due to peak growth.' },
    { date: '2024-05-01', usage: 650, notes: 'Slight reduction in usage.' },
    { date: '2024-06-01', usage: 600, notes: 'Stable usage before harvest.' },
  ],
};

function IrrigationPage() {
  return (
    <div className="container mx-auto p-4">
      <header className="py-4 border-b mb-4">
        <h1 className="text-2xl font-bold text-center">Irrigation Dashboard</h1>
      </header>
      <main>
        <IrrigationDashboard data={dummyIrrigationData} />
      </main>
      <footer className="py-4 border-t text-center mt-4">
        <p>&copy; 2024 Smart Farming Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default IrrigationPage;
