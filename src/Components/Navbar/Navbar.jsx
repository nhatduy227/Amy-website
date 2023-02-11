import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full h-[30px] bg-[#808080] flex items-center justify-end">
      <ul className="mr-[60px] flex list-none">
        <Link className="no-underline" to="/">
          <li className="p-5 text-white uppercase text-xs">Home</li>
        </Link>
        <Link className="no-underline" to="/about">
          <li className="p-5 text-white uppercase text-xs">About</li>
        </Link>
        <Link className="no-underline" to="/product">
          <li className="p-5 text-white uppercase text-xs">Product</li>
        </Link>
        <Link className="no-underline" to="/event">
          <li className="p-5 text-white uppercase text-xs">Event</li>
        </Link>
        <Link className="no-underline" to="/notice">
          <li className="p-5 text-white uppercase text-xs">Notice</li>
        </Link>
        <Link className="no-underline" to="/where-to-buy">
          <li className="p-5 pr-0 text-white uppercase text-xs">Where to buy</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
