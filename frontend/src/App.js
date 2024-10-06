import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IrrigationPage from './pages/IrrigationPage';
import CropHealthPage from './pages/CropHealthPage';
import SensorDataPage from './pages/SensorDataPage';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp'; // Import SignUp component
import SignIn from './components/SignIn';   // Import SignIn component
import './styles.css'; // Import the styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/irrigation" element={<IrrigationPage />} />
          <Route path="/crop-health" element={<CropHealthPage />} />
          <Route path="/sensor-data" element={<SensorDataPage />} />
          <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
          <Route path="/signin" element={<SignIn />} /> {/* Add SignIn route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;