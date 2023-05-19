import CartItem from "./CartItem";
import { CartContext } from "../../App";
import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";

import productBanner from '../../Assets/product-banner.png';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';


const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const { t } = useTranslation();
    const initialState = {
        username: "",
        phone: "",
        address: ""
    }
    const { setCartItems } = useContext(CartContext)
    const [userInfo, setUserInfo] = useState(initialState)

    const formatPhoneNumber = (e) => {
        let input = e.target.value;
        input = input.replace(/\D/g, ''); // Remove all non-digit characters
        input = input.slice(0, 10); // Limit to 10 digits
        const formattedPhoneNumber = input.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Format as xxx-xxx-xxxx
        setUserInfo({
            ...userInfo,
            [e.target.name]: formattedPhoneNumber
        });
    };

    const handleInputChange = event => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    };

    const handleOrderCreation = async () => {
        const collectionRef = collection(db, "orders")
        const payload = { userInfo: userInfo, cartItems: cartItems, price: calculateTotal(cartItems), status: "pending" }
        await addDoc(collectionRef, payload).then(() => alert("Order Submitted"))
        setCartItems([])
    }

    const calculateTotal = (items) =>
        items.reduce((acc, item) => acc + item.amount * item.productPrice, 0);

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

                <h2 class="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`cart.user info`)}</h2>
                <div className="flex flex-col justify-left items-center">
                    <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-primary-default font-medium mb-2">{t(`cart.username`)}</label>
                        <input
                            className="w-[660px]"
                            type="text"
                            name="username"
                            placeholder={t(`cart.username`)}
                            value={userInfo.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-primary-default font-medium mb-2">{t(`cart.phone`)}</label>
                        <input
                            className="w-[660px]"
                            type="phone"
                            name="phone"
                            placeholder="xxx-xxx-xxxx"
                            value={userInfo.phone}
                            onChange={formatPhoneNumber}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-primary-default font-medium mb-2">{t(`cart.address`)}</label>
                        <input
                            className="w-[660px]"
                            name="address"
                            placeholder={t(`cart.address`)}
                            value={userInfo.address}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <h2 class="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`cart.order confirmation`)}</h2>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
                    {cartItems.length === 0 ? <p class="text-primary-default font-medium text-center" id="slide-over-title">{t(`cart.no item`)}</p> : null}
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.productId}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>

                <div class="text-primary-default font-medium text-center">
                    <p>{t(`cart.total`)}: {calculateTotal(cartItems)} VND</p>
                </div>
                <h2 class="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`cart.payment instruction`)}</h2>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
                    <div class="bg-gray-200 p-4 rounded w-[660px]">
                        <p class="text-gray-700">Thông tin tài khoản cho khách mua lẻ khi đặt hàng: BÙI THỊ ÁNH - Số tài khoản: 060199027754 - Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - PGD An Phú – TP HCM</p>
                    </div>
                </div>

                <div class="mt-6">
                    <button
                        class="bg-blue-500 text-white py-2 px-4 mx-auto block"
                        onClick={handleOrderCreation}>
                        {t(`cart.buy`)}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Cart;