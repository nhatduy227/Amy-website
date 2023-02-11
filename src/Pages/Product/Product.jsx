import React from 'react';
import productBanner from '../../Assets/product-banner.png';
import ProductCard from './ProductCard';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

const Product = () => {
  return (
    <div className='bg-background-main overflow-hidden pb-28'>
      <div className="relative">
        {/* Decoration */}
        <img src={la1} alt="" className="w-[250px] top-[600px] -left-[50px] absolute" />
        <img src={bubbleDeco} alt="bubbleDeco" className="w-[400px] top-[800px] -left-[100px] absolute" />
        <img src={la2} alt="" className="w-[250px] top-[800px] -right-[50px] absolute" />
        <img src={la1} alt="" className="w-[250px] top-[1300px] -left-[50px] absolute" />
        <img src={bubbleDeco} alt="bubbleDeco" className="w-[400px] top-[1100px] -right-[120px] absolute" />
        <img src={la2} alt="" className="w-[250px] top-[1500px] -right-[50px] absolute" />

        {/* Banner */}
        <img className="w-full" src={productBanner} alt="product-banner" />
        <h1 className="text-primary-default text-center text-[24px] font-semibold mt-5">Không chất bảo quản</h1>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;
