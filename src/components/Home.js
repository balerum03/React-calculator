import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome To my Calculator</h1>
    <p>On this page you will find an online calculator that was build with React</p>
    <Link to="/calculator" className="calculator-btn">Go To Calculator</Link>
  </div>
);

export default Home;
