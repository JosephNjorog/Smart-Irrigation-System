import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarFooterStyles.css'; // Importing CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Smart Irrigation</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/irrigation" className="nav-link">Irrigation</Link></li>
          <li><Link to="/crop-health" className="nav-link">Crop Health</Link></li>
          <li><Link to="/sensor-data" className="nav-link">Sensor Data</Link></li>
          <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
          <li><Link to="/signin" className="nav-link">Sign In</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
