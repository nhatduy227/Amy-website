import CartItem from "./CartItem";
import { CartContext } from "../../App";
import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";

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
        <div className="lg:px-36 pt-5 relative overflow-hidden">
            <div>
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">{t(`cart.user info`)}</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t(`cart.username`)}</label>
                    <input
                        type="text"
                        name="username"
                        placeholder={t(`cart.username`)}
                        value={userInfo.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t(`cart.phone`)}</label>
                    <input
                        type="phone"
                        name="phone"
                        placeholder="xxx-xxx-xxxx"
                        value={userInfo.phone}
                        onChange={formatPhoneNumber}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">{t(`cart.address`)}</label>
                    <input
                        name="address"
                        placeholder={t(`cart.address`)}
                        value={userInfo.address}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div>
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">{t(`cart.order confirmation`)}</h2>
                {cartItems.length === 0 ? <p class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">{t(`cart.no item`)}</p> : null}
                {cartItems.map((item) => (
                    <CartItem
                        key={item.productId}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>{t(`cart.total`)}</p>
                    <p>{calculateTotal(cartItems)} VND</p>
                </div>
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">{t(`cart.payment instruction`)}</h2>
                <div class="bg-gray-200 p-4 rounded">
                    <p class="text-gray-700">Thông tin tài khoản cho khách mua lẻ khi đặt hàng: BÙI THỊ ÁNH - Số tài khoản: 060199027754 - Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - PGD An Phú – TP HCM</p>
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