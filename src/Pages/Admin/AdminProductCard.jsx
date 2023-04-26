import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const AdminProductCard = ({ product }) => {
    const { handleAddToCart } = useContext(CartContext);
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
                            alert("Item Added")
                            handleAddToCart(product)
                        }} className='px-4 bg-white text-background-main font-semibold hover:opacity-80 rounded'>Edit Item</button>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <button onClick={() => {
                            alert("Item Added")
                            handleAddToCart(product)
                        }} className='px-4 bg-white text-background-main font-semibold hover:opacity-80 rounded'>Delete Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductCard;
