import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="list-nav">
        <Link className="nav-link" to="/">
          <li className="list-item">Home</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li className="list-item">About</li>
        </Link>
        <Link className="nav-link" to="/product">
          <li className="list-item">Product</li>
        </Link>
        <Link className="nav-link" to="/event">
          <li className="list-item">Event</li>
        </Link>
        <Link className="nav-link" to="/notice">
          <li className="list-item">Notice</li>
        </Link>
        <Link className="nav-link" to="/where-to-buy">
          <li className="list-item">Where to buy</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
