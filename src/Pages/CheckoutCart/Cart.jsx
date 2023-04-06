import CartItem from "./CartItem";
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from "../../App";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const { setCartItems } = useContext(CartContext)
    const user = useContext(UserContext)
    const [confirmation, setConfirmation] = useState(false)
    const handleOrderCreation = async () => {
        const collectionRef = collection(db, "orders")
        const id = uuidv4();
        const payload = { orderId: id, userEmail: user.email, cartItems: cartItems, price: calculateTotal(cartItems), status: "pending" }
        await addDoc(collectionRef, payload).then(() => alert("Order Submitted"))
        setConfirmation(true)
        setCartItems([])
    }
    const calculateTotal = (items) =>
        items.reduce((acc, item) => acc + item.amount * item.productPrice, 0);
    return (
        <div class="flex items-start justify-between flex-col h-full">
            <div>
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">Giỏ Hàng</h2>
                {confirmation === true ? <p class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">Order Completed</p> : null}
                {confirmation === false && cartItems.length === 0 ? <p class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">No item in cart</p> : null}
                {confirmation === false && cartItems.map((item) => (
                    <CartItem
                        key={item.productId}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                {confirmation === false ? <>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Total:</p>
                        <p>{calculateTotal(cartItems)} VND</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Item can be paid by cash or wire transfer</p>
                    <div class="mt-6">
                        < a onClick={handleOrderCreation}
                            class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Buy Now</a>
                    </div>
                </>
                    : <>
                        <p class="mt-0.5 text-sm text-gray-500">Your order will be ship as soon as possible</p>
                        <div class="mt-6">
                            <Link className="flex no-underline text-base" to="/user-info">
                                < a
                                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">View all your orders</a>
                            </Link>

                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Cart;