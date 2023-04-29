import React from 'react';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase';
import { Link } from 'react-router-dom';

const AdminProductCard = ({ product }) => {
    const handleDelete = (productType, productId) => {
        const docRef = doc(db, productType, productId);
        deleteDoc(docRef)
            .then(docRef => {
                console.log("Document Deleted");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
            <div className="flex  w-[660px]">
                <Link to={"/product/" + product.productId} >
                    <img className="w-[220px] h-[220px] object-cover ml-10" src={product.productFile} alt="" />
                </Link>
                <div className="pl-20 text-white">
                    <div className="text-lg text-white">{product.productName}</div>
                    <div className='flex flex-col mt-2'>
                        <button onClick={() => {
                            handleDelete(product.productType, product.productId)
                        }} className='px-4 bg-white text-background-main font-semibold hover:opacity-80 rounded'>Delete Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductCard;
