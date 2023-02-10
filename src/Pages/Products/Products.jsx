import React from 'react';
import Bubble from '../../Assets/bubble.png';
import './Products.css';

export default function Products() {
  const dummyData = [
    {
      name: 'Trân châu trắng 3Q',
      image: Bubble,
      price: 25000,
    },
    {
      name: 'Trân châu tươi Hoàng Kim',
      image: Bubble,
      price: 25000,
    },
    {
      name: 'Trân châu tươi Phô mai',
      image: Bubble,
      price: 25000,
    },
    {
      name: 'Trà sữa trân châu tươi',
      image: Bubble,
      price: 25000,
    },
  ];
  return (
    <div className="products">
      <div className="heading">
        <h1>Không chất bảo quản</h1>
        <hr className="line" />
      </div>
      <h2> Selling Products</h2>
      <div className="product-card">
        {dummyData.map((d) => (
          <div key={d.name} className="cart-item">
            <img src={d.image} alt="cart-item" />
            <p>{d.name}</p>
            <div className="price">{d.price} VND</div>
          </div>
        ))}
      </div>
      <hr className="line" />
      <h2> Selling Products</h2>
      <div className="product-card">
        {dummyData.map((d) => (
          <div key={d.name} className="cart-item">
            <img src={d.image} alt="cart-item" />
            <p>{d.name}</p>
            <div className="price">{d.price} VND</div>
          </div>
        ))}
      </div>
      <hr className="line" />
    </div>
  );
}
