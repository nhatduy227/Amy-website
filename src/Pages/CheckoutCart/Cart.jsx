import CartItem from "./CartItem";
import { CartContext } from "../../App";
import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
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

    const handleOrderCreation = async () => {
        const collectionRef = collection(db, "orders")
        const id = uuidv4();
        const payload = { orderId: id, userInfo: userInfo, cartItems: cartItems, price: calculateTotal(cartItems), status: "pending" }
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
                        id="name"
                        className="w-full border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="John Doe"
                        value={userInfo.username}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t(`cart.phone`)}</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="xxx-xxx-xxxx"
                        value={userInfo.phone}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">{t(`cart.address`)}</label>
                    <textarea
                        id="address"
                        className="w-full border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="123 Main St, Anytown, USA"
                        value={userInfo.address}
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
                <div class="mt-6">
                    <button onClick={handleOrderCreation}>
                        {t(`cart.buy`)}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;