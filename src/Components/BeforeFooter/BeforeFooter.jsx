import React from 'react';
import fanPage from '../../Assets/fanpage.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const BeforeFooter = () => {
  return (
    <div className="bg-primary-default flex flex-col pt-[50px] px-[200px] pb-5 gap-5 text-white">
      <div className="flex gap-12">
        <div className="flex flex-col flex-[1.6] text-justify text-sm gap-2">
          <h2 className="text-left text-[18px] font-medium">AMY VN JOINT STOCK COMPANY</h2>
          <span>Văn phòng: Số 02, Đường 24, Khu phố 2, Phường An Khánh, Tp. Thủ Đức, T.Pho Ho Chi Minh.</span>
          <span>Nhà máy sản xuất: 143 Võ Văn Hát, Phường Long Trường, Tp. Thủ Đức, T.Pho Ho Chi Minh.</span>
          <div className="flex">
            <EmailOutlinedIcon />
            <span className="ml-1">Email: info@amyvietnam.com</span>
          </div>
          <div className="flex">
            <PublicOutlinedIcon />
            <span className="ml-1">Website: www.amyvietname.com</span>
          </div>
          <div>
            <LocalPhoneOutlinedIcon />
            <span className="ml-1">Hotline: (84.8) 653 653 67</span>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">POLICY</h2>
          <span>Information Security Policy</span>
          <span>Rules & Form Of Payment</span>
          <span>Return & Refund Policy</span>
          <span>Shipping & Forward Policy</span>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">INFORMATION</h2>
          <span>Recruitment</span>
          <span>Agent system</span>
          <span>Frequently asked questions</span>
          <span>Contact Cooperation</span>
        </div>
        <div className="flex flex-col flex-1 text-justify text-sm gap-2">
          <h2 className=" text-left text-[18px] font-medium">FANPAGE</h2>
          <a href="https://www.facebook.com/">
            <img src={fanPage} alt="" />
          </a>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2 className="text-left text-[18px] font-medium">CONTACT US</h2>
          <FacebookIcon className="text-[#0572e6] bg-white rounded mx-2 ml-0" />
          <YouTubeIcon className="text-[#f00] bg-white rounded" />
        </div>
        <div>
          <h2 className="text-left text-[18px] font-medium">CONTACT US</h2>
          <div className='text-sm'>Receive the lastest product information, promotions and more</div>
          <input className='p-1 pl-2 outline-none text-background-main my-1' type="text" placeholder='Your email'/>
          <button className='p-1 px-2 outline-none bg-background-main'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BeforeFooter;
