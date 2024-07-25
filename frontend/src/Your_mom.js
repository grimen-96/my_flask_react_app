import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure this import is present to use styles

const YourMom = () => {
  return (
    <div className="YourRelative">
      <nav className="App-nav">
        <Link className="nav-link" to="/">your family</Link>
        <Link className="nav-link" to="/your_mom">your mom</Link>
      </nav>
      <img src="/images/YourMom.png" alt="Your Mom" />
    </div>
  );
};

export default YourMom;
