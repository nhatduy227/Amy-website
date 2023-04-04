import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../App';

const ProductCard = ({ id, title, price, img }) => {
  const order = useContext(OrderContext)
  const [cartItems, setCartItems] = useState(order.cartItems);
  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
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
        <Link to={"/product/" + id} >
          <img className="w-[220px] h-[220px] object-cover ml-10" src={img} alt="" />
        </Link>
        <div className="pl-20 text-white">
          <div className="text-lg text-white">{title}</div>
          <div className='py-4'>Price: {price} VND</div>
          <div className='flex flex-col mt-2'>
            <label htmlFor="quantity" className='mt-2'>Quantity</label>
            <input className='px-4 text-background-main select-none' id="quantity" type="number" min="1" max="5" placeholder='01' />
          </div>
          <div className='flex flex-col mt-2'>
            <button onClick={handleAddToCart} className='px-4 bg-white text-background-main font-semibold hover:opacity-80 rounded'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
