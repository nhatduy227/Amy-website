import React from 'react';
import productBanner from '../../Assets/product-banner.png';
import ProductCard from './ProductsCard';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';
import cunang from '../../Assets/cunang.png';
import duongmia from '../../Assets/duongmia.png';
import duongden from '../../Assets/duongden.png';
import trasua from '../../Assets/trasua.png';
import tranchau3Q from '../../Assets/3Q.png';

const productList = [
  {
    id: 1,
    title: 'Trân châu tươi củ năng',
    img: cunang,
    price: 25000,
  },
  {
    id: 2,
    title: 'Trân châu tươi đường mía',
    img: duongmia,
    price: 25000,
  },
  {
    id: 3,
    title: 'Trân châu tươi đường đen',
    img: duongden,
    price: 25000,
  },
  {
    id: 4,
    title: 'Trà sữa trân châu tươi đường đen',
    img: trasua,
    price: 25000,
  },
  {
    id: 5,
    title: 'Trân châu trắng 3Q',
    img: tranchau3Q,
    price: 25000,
  },
];

const Products = () => {
  return (
    <div className="bg-background-main overflow-hidden pb-28">
      <div className="relative">
        {/* Decoration */}
        <img src={la1} alt="" className="hidden lg:block w-[250px] top-[600px] -left-[50px] absolute" />
        <img
          src={bubbleDeco}
          alt="bubbleDeco"
          className="hidden lg:block w-[400px] top-[800px] -left-[100px] absolute"
        />
        <img src={la2} alt="" className="hidden lg:block w-[250px] top-[800px] -right-[50px] absolute" />
        <img src={la1} alt="" className="hidden lg:block w-[250px] top-[1300px] -left-[50px] absolute" />
        <img
          src={bubbleDeco}
          alt="bubbleDeco"
          className="hidden lg:block w-[400px] top-[1100px] -right-[120px] absolute"
        />
        <img src={la2} alt="" className="hidden lg:block w-[250px] top-[1500px] -right-[50px] absolute" />

        {/* Banner */}
        <img className="w-full" src={productBanner} alt="product-banner" />
        <h1 className="text-primary-default text-center text-[24px] font-semibold mt-5">Không chất bảo quản</h1>
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.title}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
