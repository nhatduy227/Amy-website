import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase';
import ProductCard from './ProductsCard';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

import tranchaukhoBanner1 from '../../Assets/TrangHat.png';

const DriedBoba = () => {
  const [driedBoba, setDriedBoba] = useState([]);
  const fetchData = async () => {
    const collectionRef = collection(db, 'driedBoba');
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => doc.data());
    setDriedBoba(documents);

  };
  useEffect(() => {
    fetchData();
  }, []);
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
        <img className="w-full lg:h-[610px]" src={tranchaukhoBanner1} alt="product-banner" />
        <h1 className="text-primary-default text-center text-[24px] font-semibold mt-5">Không chất bảo quản</h1>
        {driedBoba.map((product) => {
          return (
            <ProductCard
              key={product.productId}
              id={product.productId}
              title={product.productName}
              price={product.productPrice}
              img={product.productFile}
            />
          );
        })}
        <p className='w-full text-white flex justify-center items-center mt-5'>Thông tin tài khoản cho khách mua lẻ khi đặt hàng: BÙI THỊ ÁNH - Số tài khoản: 060199027754 - Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - PGD An Phú – TP HCM</p>
      </div>
    </div>
  );
};

export default DriedBoba;
