
const CartItem = ({ item, addToCart, removeFromCart }) => (
    <>
        <li class="flex py-6">
            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.productName}</h3>
                        <div class="h-10 0">
                            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                <button onClick={() => removeFromCart(item.productId)} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                </button>
                                <p class="w-5 text-center bg-gray-300 font-semibold flex items-center text-gray-700">
                                    {item.amount}
                                </p>
                                <button onClick={() => addToCart(item)} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <p class="ml-4">{(item.amount * item.productPrice)} VND</p>
                    </div>
                </div>
            </div>
        </li>
    </>
);

export default CartItem;
