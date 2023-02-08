import React from 'react'
import './Header.css'
import Logo from '../../Assets/logo.png';
import { Link } from 'react-scroll'

export default function Header() {
  return (
    <div className='container'>
    <nav className='header'>
        <img className='image' src={Logo} alt="Logo" />
    </nav>
    <nav className='nav'>
      <Link activeClass="active" to="home" spy={true} smooth={true} className='link'>Home</Link> 
      <Link to="products" spy={true} smooth={true} className='link'>Productssss</Link>
      <Link to="home" spy={true} smooth={true} className='link'>Login</Link>
    </nav>
    </div>
    
  )
}
