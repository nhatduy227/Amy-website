import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, img }) => {
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
            {/* <label htmlFor="size">Size</label>
            <input className='px-4 mt-1 text-background-main' id="size" type="number" placeholder='250g' /> */}
            <label htmlFor="quantity" className='mt-2'>Quantity</label>
            <input className='px-4 text-background-main select-none' id="quantity" type="number" min="1" max="5" placeholder='01' />
          </div>
          <div className='flex flex-col mt-2'>
            <button className='px-4 bg-white text-background-main font-semibold hover:opacity-80 rounded'>Add to cart</button>
            {/* <button className='px-4 bg-primary-default ml-3 hover:opacity-80 rounded'>Buy now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
