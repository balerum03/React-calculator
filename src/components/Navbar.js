import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <div className="title-div">
      <Link to="/" className="nav-title">Calculator Page</Link>
    </div>
    <div className="nav-links">
      <Link to="/" className="nav-link">home</Link>
      <Link to="/calculator" className="nav-link">Cualculator</Link>
      <Link to="/quote" className="nav-link">Quote of the day</Link>
    </div>
  </nav>
);

export default Navbar;
