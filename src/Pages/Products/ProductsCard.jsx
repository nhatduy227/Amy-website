import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const ProductCard = ({ product }) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  console.log(cartItems)
  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.productId === clickedItem.productId);
      if (isItemInCart) {
        return prev.map((item) =>
          item.productId === clickedItem.productId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
      <div className="flex  w-[660px]">
        <Link to={"/product/" + product.productId} >
          <img className="w-[220px] h-[220px] object-cover ml-10" src={product.productFile} alt="" />
        </Link>
        <div className="pl-20 text-white">
          <div className="text-lg text-white">{product.productName}</div>
          <div className='py-4'>Price: {product.productPrice} VND</div>
          <div className='flex flex-col mt-2'>
            <label htmlFor="quantity" className='mt-2'>Quantity</label>
            <input className='px-4 text-background-main select-none' id="quantity" type="number" min="1" max="5" placeholder='01' />
          </div>
          <div className='flex flex-col mt-2'>
            <button onClick={handleAddToCart(product)} className='px-4 bg-white text-background-main font-semibold hover:opacity-80 rounded'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
