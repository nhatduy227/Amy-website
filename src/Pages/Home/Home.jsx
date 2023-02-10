import React from 'react';
import banner from '../../Assets/background.png';
import './Home.css';
import Products from './../Products/Products';
import NewProducts from './../NewProducts/NewProducts';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img className="banner-img" src={banner} alt="banner" />
      </div>
      <div className="home-container">
        <Products/>
        <NewProducts/>
      </div>
    </div>
  );
};

export default Home;
