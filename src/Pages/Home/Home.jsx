import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase';

import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent';

import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';
import Slider from './../../Components/Slider/Slider';

const Home = () => {
  const [freshBoba, setFreshBoba] = useState([]);
  const [driedBoba, setDriedBoba] = useState([]);
  const [powder, setPowder] = useState([]);
  const fetchData = async (productType) => {
    const collectionRef = collection(db, productType);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => doc.data());
    if (productType === 'freshBoba')
      setFreshBoba(documents);
    if (productType === 'driedBoba')
      setDriedBoba(documents);
    if (productType === 'powder')
      setPowder(documents);
  };
  useEffect(() => {
    fetchData('freshBoba');
    fetchData('driedBoba');
    fetchData('powder');
  }, []);

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

        <h2 className="text-primary-default text-center text-[24px] font-semibold mb-5">Không chất bảo quản</h2>
        <ProductsComponent title="Trân châu tươi" productData={freshBoba} />
        <ProductsComponent title="Trân châu khô" productData={driedBoba} classCustom="h-[350px]" />
        <ProductsComponent title="Bột gia vị" productData={powder} classCustom="h-[250px] w-[200px]" />
      </div>
    </div>
  );
};

export default Home;
