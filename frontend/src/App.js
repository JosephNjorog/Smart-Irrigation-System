import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import OpenLayersMap from './components/OpenLayersMap';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import IrrigationPage from './pages/IrrigationPage';
import CropHealthPage from './pages/CropHealthPage';
import SensorDataPage from './pages/SensorDataPage';
import './assets/styles/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/irrigation" component={IrrigationPage} />
        <Route path="/crop-health" component={CropHealthPage} />
        <Route path="/sensor-data" component={SensorDataPage} />
      </Routes>
    </Router>
  );
};

export default App;
