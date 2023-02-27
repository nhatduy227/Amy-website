import React from 'react';
import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent';
import bubble1 from '../../Assets/bubble1.png';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';
import Slider from './../../Components/Slider/Slider';
import cunang from '../../Assets/cunang.png';
import duongmia from '../../Assets/duongmia.png';
import duongden from '../../Assets/duongden.png';
import trasua from '../../Assets/trasua.png';
import tranchau3Q from '../../Assets/3Q.png';

const dummyData = [
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

const dummyData2 = [
  {
    id: 5,
    title: 'Trân châu trắng 3Q',
    img: bubble1,
    price: 25000,
  },
  {
    id: 5,
    title: 'Trân châu tươi Hoàng Kim',
    img: bubble1,
    price: 25000,
  },
  {
    id: 5,
    title: 'Trân châu tươi Phô mai',
    img: bubble1,
    price: 25000,
  },
];

const Home = () => {
  return (
    <div className="">
      <div className="bg-gray-50">
        <Slider />
      </div>

      <div className="bg-background-main pt-5 relative overflow-hidden">
        {/* Decoration */}
        <>
          <img src={la1} alt="" className="lg:block hidden w-[250px] top-[50px] -left-[50px] absolute" />
          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="lg:block hidden w-[400px] top-[300px] -left-[100px] absolute "
          />
          <img src={la2} alt="" className="lg:block hidden w-[250px] top-[500px] -right-[50px] absolute" />
          <img src={la1} alt="" className="lg:block hidden w-[250px] top-[800px] -left-[50px] absolute" />
          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="lg:block hidden w-[400px] top-[800px] -right-[120px] absolute"
          />
          <img src={la2} alt="" className="lg:block hidden w-[250px] top-[1200px] -right-[50px] absolute" />
          <img src={la1} alt="" className="lg:block hidden w-[250px] top-[1500px] -left-[50px] absolute" />
        </>

        <h1 className="text-primary-default text-center text-[24px] font-semibold mb-5">Không chất bảo quản</h1>
        <ProductsComponent title="Sản phẩm bán chạy" productData={dummyData} />
        <ProductsComponent title="Sản phẩm bán chạy" productData={dummyData} />
        <ProductsComponent title="Sản phẩm mới" productData={dummyData2} />
        <ProductsComponent title="Sản phẩm mới" productData={dummyData2} />
      </div>
    </div>
  );
};

export default Home;
