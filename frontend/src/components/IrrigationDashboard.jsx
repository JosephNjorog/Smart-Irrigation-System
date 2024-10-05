import React from 'react';

function IrrigationDashboard({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Irrigation Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Water Usage</h3>
          <p className="text-3xl font-bold">{data.waterUsage} gallons</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Soil Moisture</h3>
          <p className="text-3xl font-bold">{data.soilMoisture}%</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Next Irrigation</h3>
          <p className="text-3xl font-bold">{data.nextIrrigation}</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Irrigation Schedule</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Day</th>
              <th className="border p-2">Start Time</th>
              <th className="border p-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {data.schedule.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.day}</td>
                <td className="border p-2">{item.startTime}</td>
                <td className="border p-2">{item.duration} minutes</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IrrigationDashboard;