import CartItem from "./CartItem";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items) =>
        items.reduce((acc, item) => acc + item.amount * item.price, 0);
    return (
        <>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </>
    );
};

export default Cart;