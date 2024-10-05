import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IrrigationPage from './pages/IrrigationPage';
import CropHealthPage from './pages/CropHealthPage';
import SensorDataPage from './pages/SensorDataPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/irrigation" component={IrrigationPage} />
          <Route path="/crop-health" component={CropHealthPage} />
          <Route path="/sensor-data" component={SensorDataPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;