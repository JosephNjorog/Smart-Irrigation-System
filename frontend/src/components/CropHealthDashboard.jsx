import React from 'react';
import { Line } from 'react-chartjs-2';

function CropHealthDashboard({ data }) {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Crop Health Index',
        data: data.healthIndex,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Crop Health Overview</h2>
      <Line data={chartData} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Detailed Analysis</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Health Index</th>
              <th className="py-2 px-4 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.details.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{entry.date}</td>
                <td className="py-2 px-4 border">{entry.index}</td>
                <td className="py-2 px-4 border">{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CropHealthDashboard;
