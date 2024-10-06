import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function SensorDataVisualization({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Sensor Data Visualization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Temperature</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.temperature}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" name="Temperature (°C)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Humidity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.humidity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Humidity (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Soil Moisture</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.soilMoisture}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#ffc658" name="Soil Moisture (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Light Intensity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.lightIntensity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#ff7300" name="Light Intensity (lux)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default SensorDataVisualization;