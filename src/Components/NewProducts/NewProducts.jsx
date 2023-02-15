import React from 'react';
import NewBubble from '../../Assets/bubble1.png';
import './NewProducts.css';

export default function NewProducts() {
  const dummyData = [
    {
        name: 'Trân châu trắng 3Q',
        image: NewBubble,
        price: 25000,
      },
      {
        name: 'Trân châu tươi Hoàng Kim',
        image: NewBubble,
        price: 25000,
      },
      {
        name: 'Trân châu tươi Phô mai',
        image: NewBubble,
        price: 25000,
      },
      {
        name: 'Trà sữa trân châu tươi',
        image: NewBubble,
        price: 25000,
      },
  ];
  return (
    <div className="products">
      <div className="heading" />
      <h2> New Products</h2>
      <div className="product-card">
        {dummyData.map((d) => (
          <div key={d.name} className="cart-item">
            <img src={d.image} alt="cart-item" />
            <p>{d.name}</p>
            <div className="price">{d.price} VND</div>
          </div>
        ))}
      </div>
      <h2> New Products</h2>
      <div className="product-card">
        {dummyData.map((d) => (
          <div key={d.name} className="cart-item">
            <img src={d.image} alt="cart-item" />
            <p>{d.name}</p>
            <div className="price">{d.price} VND</div>
          </div>
        ))}
      </div>
    </div>
  );
}
