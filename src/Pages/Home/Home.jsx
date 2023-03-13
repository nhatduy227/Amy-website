import React from 'react';
import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent';
import hatduongden from '../../Assets/HatDuongDen.png';
import hathoangkim from '../../Assets/HatHoangKim.png';
import hatkhoaimon from '../../Assets/HatKhoaiMon.png';
import hatolong from '../../Assets/HatOlong.png';

import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';
import Slider from './../../Components/Slider/Slider';

import tranchaucunang from '../../Assets/cunang.png';
import tranchauduongmia from '../../Assets/duongmia.png';
import tranchauduongden from '../../Assets/duongden.png';
import tranchauphomai from '../../Assets/phomai.png';

import botchienxu from '../../Assets/bot-chien-xu.png';
import botgiavi from '../../Assets/bot-gia-vi.png';

const dummyData = [
  {
    id: 1,
    title: 'Trân châu củ năng 350gr',
    img: tranchaucunang,
    price: 25000,
  },
  {
    id: 2,
    title: 'Trân châu đường mía 350gr',
    img: tranchauduongmia,
    price: 25000,
  },
  {
    id: 3,
    title: 'Trân châu đường đen 350gr',
    img: tranchauduongden,
    price: 25000,
  },
  {
    id: 4,
    title: 'Trân châu phô mai 350gr',
    img: tranchauphomai,
    price: 25000,
  },
];

const dummyData2 = [
  {
    id: 5,
    title: 'Trân châu khô hạt Đường đen',
    img: hatduongden,
    // price: 25000,
  },
  {
    id: 6,
    title: 'Trân châu khô hạt Hoàng Kim',
    img: hathoangkim,
    // price: 25000,
  },
  {
    id: 7,
    title: 'Trân châu khô hạt Khoai môn',
    img: hatkhoaimon, // price: 25000,
  },
  {
    id: 8,
    title: 'Trân châu khô hạt Ô Long',
    img: hatolong, // price: 25000,
  },
];

const dummyData3 = [
  {
    id: 9,
    title: 'Bột gia vị ướp gà 1kg',
    img: botgiavi,
    // price: 25000,
  },
  {
    id: 10,
    title: 'Bột chiên xù 10kg',
    img: botchienxu,
    // price: 25000,
  },
];

const Home = () => {
  return (
    <div className="">
      <div className="bg-gray-50">
        <Slider />
      </div>

      <div className="bg-background-main lg:px-36 pt-5 relative overflow-hidden">
        {/* Decoration */}
        <>
          <img src={la1} alt="" className="lg:w-[250px] w-[150px] top-[50px] -left-[50px] absolute" />
          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="lg:w-[400px] w-[320px] top-[300px] -left-[100px] absolute "
          />
          <img src={la2} alt="" className="lg:w-[250px] w-[150px] top-[500px] -right-[50px] absolute" />
          <img src={la1} alt="" className="lg:w-[250px] w-[150px] top-[800px] -left-[50px] absolute" />
          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="lg:w-[400px] w-[320px] top-[700px] -right-[120px] absolute"
          />
          <img src={la2} alt="" className="lg:w-[250px] w-[150px] top-[1400px] -right-[50px] absolute" />
          {/* <img src={la1} alt="" className="lg:block hidden w-[250px] top-[1500px] -left-[50px] absolute" /> */}
        </>

        <h1 className="text-primary-default text-center text-[24px] font-semibold mb-5">Không chất bảo quản</h1>
        <ProductsComponent title="Trân châu tươi" productData={dummyData} />
        <ProductsComponent title="Trân châu khô" productData={dummyData2} classCustom="h-[350px]" />
        <ProductsComponent title="Bột gia vị" productData={dummyData3} classCustom="h-[250px] w-[200px]" />
      </div>
    </div>
  );
};

export default Home;
