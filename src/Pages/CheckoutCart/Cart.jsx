import CartItem from "./CartItem";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items) =>
        items.reduce((acc, item) => acc + item.amount * item.productPrice, 0);
    return (
        <div class="flex items-start justify-between flex-col h-full">
            <div>
                <h2 class="text-lg font-medium text-gray-900 text-center" id="slide-over-title">Giỏ Hàng</h2>
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
                    <p>Tổng:</p>
                    <p>{calculateTotal(cartItems)} VND</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Khách hàng có thể chuyển khoảng hoặc trả tiền mặt</p>
                <div class="mt-6">
                    < a
                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Đặt hàng</a>
                </div>
            </div>
        </div>
    );
};

export default Cart;