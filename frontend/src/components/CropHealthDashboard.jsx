import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CropHealthDashboard({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Crop Health Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Overall Health</h3>
          <p className="text-3xl font-bold">{data.overallHealth}%</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Pest Risk</h3>
          <p className="text-3xl font-bold">{data.pestRisk}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Nutrient Levels</h3>
          <p className="text-3xl font-bold">{data.nutrientLevels}</p>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Crop Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.growthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="height" fill="#8884d8" name="Height (cm)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Recent Alerts</h3>
        <ul className="list-disc pl-5">
          {data.alerts.map((alert, index) => (
            <li key={index} className="text-red-600">{alert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CropHealthDashboard;