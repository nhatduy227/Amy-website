import React from 'react';
import banner from '../../Assets/background.png';
import Products from '../../Components/Products/Products';
import Bubble from '../../Assets/bubble.png';
import bubble1 from '../../Assets/bubble1.png';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

const dummyData = [
  {
    name: 'Trân châu trắng 3Q',
    image: Bubble,
    price: 25000,
  },
  {
    name: 'Trân châu tươi Hoàng Kim',
    image: Bubble,
    price: 25000,
  },
  {
    name: 'Trân châu tươi Phô mai',
    image: Bubble,
    price: 25000,
  },
  {
    name: 'Trà sữa trân châu tươi',
    image: Bubble,
    price: 25000,
  },
];

const dummyData2 = [
  {
    name: 'Trân châu trắng 3Q',
    image: bubble1,
    price: 25000,
  },
  {
    name: 'Trân châu tươi Hoàng Kim',
    image: bubble1,
    price: 25000,
  },
  {
    name: 'Trân châu tươi Phô mai',
    image: bubble1,
    price: 25000,
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="">
        <img className="w-full object-cover" src={banner} alt="banner" />
      </div>
      <div className="bg-background-main pt-5 relative">
        <img src={la1} alt="" className="w-[250px] top-[50px] -left-[50px] absolute" />
        {/* Decoration */}
        <img src={bubbleDeco} alt="bubbleDeco" className="w-[400px] top-[300px] -left-[100px] absolute" />
        <img src={la2} alt="" className="w-[250px] top-[500px] -right-[50px] absolute" />
        <img src={la1} alt="" className="w-[250px] top-[800px] -left-[50px] absolute" />
        <img src={bubbleDeco} alt="bubbleDeco" className="w-[400px] top-[800px] -right-[120px] absolute" />
        <img src={la2} alt="" className="w-[250px] top-[1200px] -right-[50px] absolute" />
        <img src={la1} alt="" className="w-[250px] top-[1500px] -left-[50px] absolute" />

        <h1 className="text-primary-default text-center text-[24px] font-semibold mb-5">Không chất bảo quản</h1>
        <Products title="Sản phẩm bán chạy" productData={dummyData} />
        <Products title="Sản phẩm bán chạy" productData={dummyData} />
        <Products title="Sản phẩm mới" productData={dummyData2} />
        <Products title="Sản phẩm mới" productData={dummyData2} />
        {/* <NewProducts/> */}
      </div>
    </div>
  );
};

export default Home;
