import CartItem from "./CartItem";
import { CartContext } from "../../App";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const initialState = {
        username: "",
        email: "",
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
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">Thông tin khách hàng</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="John Doe"
                        value={userInfo.username}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="john.doe@example.com"
                        value={userInfo.email}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                    <textarea
                        id="address"
                        className="w-full border-gray-300 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="123 Main St, Anytown, USA"
                        value={userInfo.address}
                    />
                </div>
            </div>
            <div>
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">Xác nhận đơn hàng</h2>
                {cartItems.length === 0 ? <p class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">No item in cart</p> : null}
                {cartItems.map((item) => (
                    <CartItem
                        key={item.productId}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}
            </div>
            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Total:</p>
                    <p>{calculateTotal(cartItems)} VND</p>
                </div>
                <div class="mt-6">
                    <button onClick={handleOrderCreation}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;