import { useContext } from "react";

import Cart from "./Cart";
import { CartContext } from "../../App";


export default function CheckoutCart() {
    const { cartItems, handleAddToCart, handleRemoveFromCart } = useContext(CartContext);

    return (
        <>
            <Cart
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
            />
        </>
    );
}
