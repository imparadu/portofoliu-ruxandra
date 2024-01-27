import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Sketchbook from './components/Sketchbook';


function App() {

  return (
    <div className='App'>
    <Router>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sketchbook" element={<Sketchbook />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
