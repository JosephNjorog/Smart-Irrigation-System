import React from 'react';
import { Line } from 'react-chartjs-2';

function SensorDataVisualization({ data }) {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.temperature,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Humidity (%)',
        data: data.humidity,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Soil Moisture (%)',
        data: data.soilMoisture,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sensor Data Overview</h2>
      <Line data={chartData} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Detailed Analysis</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Temperature (°C)</th>
              <th className="py-2 px-4 border">Humidity (%)</th>
              <th className="py-2 px-4 border">Soil Moisture (%)</th>
              <th className="py-2 px-4 border">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.details.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{entry.date}</td>
                <td className="py-2 px-4 border">{entry.temperature}</td>
                <td className="py-2 px-4 border">{entry.humidity}</td>
                <td className="py-2 px-4 border">{entry.soilMoisture}</td>
                <td className="py-2 px-4 border">{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SensorDataVisualization;
