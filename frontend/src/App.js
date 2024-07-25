import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import YourMom from './Your_mom';
import YourDad from './Your_dad';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/your_mom" element={<YourMom />} />
        <Route path="/your_dad" element={<YourDad />} />
      </Routes>
    </div>
  );
}

export default App;
