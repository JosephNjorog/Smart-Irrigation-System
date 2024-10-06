import React from 'react';
import { Link } from 'react-router-dom';
import irrigationImage from '../assets/irrigation.webp'; // Replace with your actual image path
import cropHealthImage from '../assets/crop-health.webp'; // Replace with your actual image path
import sensorDataImage from '../assets/sensor-data.webp'; // Replace with your actual image path

function HomePage() {
  return (
    <div className="container mx-auto mt-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Welcome to Smart Irrigation & Crop Monitoring</h1>
        <p className="text-lg mb-6 animate-fade-in">
          Our mission is to provide cutting-edge solutions for farmers to optimize water usage, monitor crop health, and analyze sensor data for informed decision-making.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Link to="/irrigation" className="col-span-1 bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 animate-fade-in relative overflow-hidden">
          <img src={irrigationImage} alt="Irrigation Management" className="w-full h-48 object-cover rounded-lg mb-4 blur-sm" />
          <div className="absolute inset-0 bg-blue-700 opacity-30 rounded-lg"></div>
          <h2 className="text-2xl font-semibold mb-2 relative z-10">Irrigation Management</h2>
          <p className="relative z-10">Monitor and control your irrigation systems</p>
        </Link>
        
        <Link to="/crop-health" className="col-span-1 bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 animate-fade-in relative overflow-hidden">
          <img src={cropHealthImage} alt="Crop Health" className="w-full h-48 object-cover rounded-lg mb-4 blur-sm" />
          <div className="absolute inset-0 bg-green-700 opacity-30 rounded-lg"></div>
          <h2 className="text-2xl font-semibold mb-2 relative z-10">Crop Health</h2>
          <p className="relative z-10">Track and analyze crop health data</p>
        </Link>
        
        <Link to="/sensor-data" className="col-span-1 bg-yellow-500 text-white p-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105 animate-fade-in relative overflow-hidden">
          <img src={sensorDataImage} alt="Sensor Data" className="w-full h-48 object-cover rounded-lg mb-4 blur-sm" />
          <div className="absolute inset-0 bg-yellow-700 opacity-30 rounded-lg"></div>
          <h2 className="text-2xl font-semibold mb-2 relative z-10">Sensor Data</h2>
          <p className="relative z-10">View real-time sensor data and analytics</p>
        </Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12">
        <h2 className="text-center text-3xl font-bold mb-4 animate-fade-in">Why Choose Us?</h2>
        <p className="text-lg text-center mb-6 animate-fade-in">
          We leverage advanced technologies and data analytics to provide farmers with the tools they need to succeed in today's agricultural landscape.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mt-12">
        <h2 className="text-center text-xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🔍 Real-time monitoring of soil moisture and weather conditions.</li>
          <li>💧 Automated irrigation based on data-driven insights.</li>
          <li>📊 Data visualization tools for better decision-making.</li>
          <li>🔔 Alerts and notifications for critical updates.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12">
        <h2 className="text-center text-xl font-bold mb-4">What Our Users Say</h2>
        <blockquote className="italic text-center border-l border-gray-400 pl-4">
          "The Smart Irrigation System has transformed the way I manage my farm. I save water and see better crop yields!" - Jane Mwangi, Farmer
        </blockquote>
      </section>

      {/* Call to Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-bold mb-4">Ready to Optimize Your Farm?</h2>
        <Link to="/signup" className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration=300">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
}

export default HomePage;