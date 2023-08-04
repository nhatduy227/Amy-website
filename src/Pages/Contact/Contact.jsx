import React from 'react';
import productBanner from '../../Assets/product-banner.png';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';


const Contact = () => {
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

        {/* Address */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
          <h1 className="text-primary-default text-center text-[60px] font-semibold mt-5">LIÊN HỆ</h1>
        </div>

        {/* Map */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary-default text-center text-[60px] font-semibold mt-5">LIÊN HỆ</h1>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary-default text-center text-[40px] font-semibold mt-5">Đăng ký dùng thử sản phẩm</h1>
        </div>


      </div>
    </div>
  );
};

export default Contact;
