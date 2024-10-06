import React from 'react';
import { Bar } from 'react-chartjs-2';

function IrrigationDashboard({ data }) {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Water Usage (liters)',
        data: data.waterUsage,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Irrigation Overview</h2>
      <Bar data={chartData} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Detailed Analysis</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Water Usage (liters)</th>
              <th className="py-2 px-4 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.details.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{entry.date}</td>
                <td className="py-2 px-4 border">{entry.usage}</td>
                <td className="py-2 px-4 border">{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IrrigationDashboard;
