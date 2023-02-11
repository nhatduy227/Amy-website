import React from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import logo from '../../Assets/logo.png';

export default function Header() {
  return (
    <div className="w-full h-[80px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/">
            <img src={logo} className="w-[200px] h-20" alt="Amy-logo" />
          </Link>
        </div>
        <div className="flex items-center gap-6 mr-[60px]">
          <Link className="flex no-underline text-base" to="/">
            <PersonOutlineIcon />
            <div className="h-6 ml-1">Login</div>
          </Link>
          <Link className="flex no-underline text-base" to="/">
            <ShoppingCartOutlinedIcon />
            <div className="h-6 ml-1">Cart</div>
          </Link>
          <Link className="flex no-underline text-base" to="/">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="h-6 ml-1">Message</div>
          </Link>
          <Link className="flex no-underline text-base" to="/">
            Stores
          </Link>
        </div>
      </div>
    </div>
  );
}
