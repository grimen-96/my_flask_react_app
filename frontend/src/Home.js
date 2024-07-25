import React from 'react';
import DataFetcher from './DataFetcher';
import './App.css'; // Ensure this import is present to use styles
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <h1>Your family</h1>
      </header>
      <nav className="App-nav">
        <Link className="nav-link" to="/your_dad">your dad</Link>
        <Link className="nav-link" to="/your_mom">your mom</Link>
      </nav>
       {/* <DataFetcher /> */}
    </div>
  );
};

export default Home;
