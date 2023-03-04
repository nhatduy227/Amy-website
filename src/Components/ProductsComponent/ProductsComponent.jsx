import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsComponent({ title, productData }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[660px] h-[2px] flex justify-center bg-primary-default mb-5 items-center" />
      <h2 className="text-white text-[24px] text-center mb-5">{title}</h2>
      <div className="flex flex-wrap justify-center items-center mb-5">
        {productData.map((product) => {
          return (
            <div
              key={product.title}
              className="w-[200px] flex flex-wrap flex-col text-white items-center justify-center gap-4"
            >
              <Link to={'/product/' + product.id}>
                <img src={product.img} alt="product-img" />
              </Link>
              <div className="text-center">{product.title}</div>
              <div>{product.price} VND</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
