import React from 'react';

export default function Products({ title, productData }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="w-[660px] h-[2px] flex justify-center bg-primary-default mb-5 items-center" />
      <h2 className="text-white text-[24px] text-center mb-5">{title}</h2>
      <div className="flex flex-wrap justify-center items-center mb-5">
        {productData.map((product) => {
          return (
              <div key={product.name} className="w-[200px] flex flex-col text-white items-center justify-center gap-4">
                <img src={product.image} alt="product-img" />
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
          );
        })}
      </div>
    </div>
  );
}
