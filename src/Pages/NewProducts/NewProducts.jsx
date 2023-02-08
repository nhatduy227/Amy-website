import React from 'react'
import NewBubble from '../../Assets/bubble1.png';
import './NewProducts.css'

export default function NewProducts() {
    const dummyData = [
        {
            name: "Hạt Trân châu",
            image: NewBubble,
            price: 250000
        },
        {
            name: "Hạt Trân châu",
            image: NewBubble,
            price: 250000
        },
        {
            name: "Hạt Trân châu",
            image: NewBubble,
            price: 250000
        },
    ]
    return (
        <>
            <div className="products">
                <div className='heading' />
                <h2> New Products</h2>
                <div className='product-card'>
                    {dummyData.map((d) => (
                        <div className='cart-item'>
                            <img src={d.image} alt="cart-item" />
                            <p>{d.name}</p>
                            <div className='price'>{d.price} VND</div>
                        </div>
                    ))}
                </div>
                <h2> New Products</h2>
                <div className='product-card'>
                    {dummyData.map((d) => (
                        <div className='cart-item'>
                            <img src={d.image} alt="cart-item" />
                            <p>{d.name}</p>
                            <div className='price'>{d.price} VND</div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
