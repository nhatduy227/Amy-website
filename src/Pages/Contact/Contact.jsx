import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import productBanner from '../../Assets/product-banner.png';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';


const Contact = () => {
  const phoneNumber = "(84.8) 653 653 67"
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
          <div className='items-start'>
            <h2 className="text-white text-[24px] font-semibold mt-5">CÔNG TY TNHH AMY VIETNAM</h2>
            <p className="text-white text-[16px] mt-5"> Địa chỉ công ty: Số 2, đường 24, khu phố 2, phường An Khánh, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam</p>
            <p className="text-white text-[16px] mt-5"> Nhà máy sản xuất: 143 Võ Văn Hát, Phường Long Trường, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam</p>
            <p className="text-white text-[16px] mt-5">Website: https://amyvietnam.com | tranchautuoi.com</p>
            <p className="text-white text-[16px] mt-5">Email: info@amyvietnam.com</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-center items-center mt-20 space-x-20">
          <div class="flex flex-col items-center">
            <div class="rounded-full text-white">
              <FacebookIcon fontSize="large" />
            </div>
            <p class="mt-2 text-white">Fanpage Trân Châu</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="rounded-full text-white">
              <FacebookIcon fontSize="large" />
            </div>
            <p class="mt-2 text-white">Fanpage Bột gia vị</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="rounded-full text-white">
              <LanguageIcon fontSize="large" />
            </div>
            <p class="mt-2 text-white">Website</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="rounded-full text-white">
              <YouTubeIcon fontSize="large" />
            </div>
            <p class="mt-2 text-white">Youtube</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="rounded-full text-white">
              <LinkedInIcon fontSize="large" />
            </div>
            <p class="mt-2 text-white">Linkedin</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-center items-center mt-20">
          <button class="rounded-full p-5 bg-primary-default text-white p-4">
            Vui lòng liên hệ HOTLINE: <strong>{phoneNumber}</strong> để được tư vấn thêm
          </button>
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
