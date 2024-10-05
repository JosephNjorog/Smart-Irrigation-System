import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Smart Irrigation</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-green-200">Home</Link></li>
          <li><Link to="/irrigation" className="text-white hover:text-green-200">Irrigation</Link></li>
          <li><Link to="/crop-health" className="text-white hover:text-green-200">Crop Health</Link></li>
          <li><Link to="/sensor-data" className="text-white hover:text-green-200">Sensor Data</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;