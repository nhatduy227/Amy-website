import { Button } from "@mui/material";

const CartItem = ({ item, addToCart, removeFromCart }) => (
    <>
        <li class="flex py-6">
            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{item.productName}</a>
                        </h3>
                        <p class="ml-4">{(item.amount * item.productPrice)} VND</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Quantity: {item.amount}</p>
                </div>
                <div class="flex flex-1 items-end space-x-10 text-sm">
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => removeFromCart(item.productId)}
                    >
                        {" "}
                        -
                    </Button>
                    <strong>{item.amount}</strong>
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => addToCart(item)}
                    >
                        {" "}
                        +
                    </Button>
                </div>
            </div>
        </li>
    </>
);

export default CartItem;
