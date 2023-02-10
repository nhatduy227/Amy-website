import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <Link to="/">
            <img src={logo} className="logo" alt="Amy-logo" />
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Login
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Cart
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Message
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
