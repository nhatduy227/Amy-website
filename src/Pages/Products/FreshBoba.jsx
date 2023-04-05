import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import productBanner from '../../Assets/product-banner.png';
import ProductCard from './ProductsCard';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';


const Products = () => {
  const [freshBoba, setFreshBoba] = useState([]);
  const fetchData = async () => {
    const collectionRef = collection(db, 'freshBoba');
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => doc.data());
    setFreshBoba(documents);

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
        <img className="w-full lg:h-[610px]" src={productBanner} alt="product-banner" />
        <h1 className="text-primary-default text-center text-[24px] font-semibold mt-5">Không chất bảo quản</h1>

        {freshBoba.map((product) => {
          return (
            <ProductCard product={product} />
          );
        })}

        {/* Video */}
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <div className="mb-5">
            <ArrowForwardOutlinedIcon className="text-white mr-2" />
            <a className="text-white" href="fresh-boba-instruction.pdf" target="_blank" rel="noreferrer">
              Hướng dẫn sử dụng và bảo quản trân châu tươi
            </a>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CJfiXrcKlgw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="mb-5"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4sOt5GS2jIE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p className='w-full text-white flex justify-center items-center mt-5'>Thông tin tài khoản cho khách mua lẻ khi đặt hàng: BÙI THỊ ÁNH - Số tài khoản: 060199027754 - Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - PGD An Phú – TP HCM</p>
      </div>
    </div>
  );
};

export default Products;
