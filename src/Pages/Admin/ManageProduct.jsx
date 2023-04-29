import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase';
import { useTranslation } from 'react-i18next';
import AdminProductCard from './AdminProductCard';

export default function ManageProduct() {
  const { t } = useTranslation();
  const [freshBoba, setFreshBoba] = useState([]);
  const [driedBoba, setDriedBoba] = useState([]);
  const [powder, setPowder] = useState([]);
  const fetchData = async (productType) => {
    const collectionRef = collection(db, productType);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map((doc) => ({ productId: doc.id, ...doc.data() }))
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
    <div className="bg-background-main overflow-hidden pb-28">
      <h1 className="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`navbar.manage product`)}</h1>
      {freshBoba.map((product) => {
        return (
          <AdminProductCard product={product} />
        );
      })}
      {driedBoba.map((product) => {
        return (
          <AdminProductCard product={product} />
        );
      })}
      {powder.map((product) => {
        return (
          <AdminProductCard product={product} />
        );
      })}
    </div>
  )
}
