import React from 'react';
import './IrrigationStyles.css';

function IrrigationDashboard({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-4xl font-semibold mb-4 text-center text-gray-800">Irrigation Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        <div className="bg-blue-200 p-4 rounded-lg flex flex-col justify-center items-center shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Water Usage</h3>
          <p className="text-5xl font-bold text-blue-800">{data.waterUsage} gallons</p>
        </div>
        <div className="bg-green-200 p-4 rounded-lg flex flex-col justify-center items-center shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Soil Moisture</h3>
          <p className="text-5xl font-bold text-green-800">{data.soilMoisture}%</p>
        </div>
        <div className="bg-yellow-200 p-4 rounded-lg flex flex-col justify-center items-center shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">Next Irrigation</h3>
          <p className="text-5xl font-bold text-yellow-800">{data.nextIrrigation}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Irrigation Schedule</h3>
        <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-300">
              <th className="border p-3 text-left text-lg font-medium">Day</th>
              <th className="border p-3 text-left text-lg font-medium">Start Time</th>
              <th className="border p-3 text-left text-lg font-medium">Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.schedule.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="border p-3 text-center">{item.day}</td>
                <td className="border p-3 text-center">{item.startTime}</td>
                <td className="border p-3 text-center">{item.duration} minutes</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IrrigationDashboard;
