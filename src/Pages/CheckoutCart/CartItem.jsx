import { Button } from "@mui/material";

const CartItem = ({ item, addToCart, removeFromCart }) => (
    <>
        <li class="flex py-6">
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={item.image} atl={item.title} class="h-full w-full object-cover object-center" />
            </div>
            <div class="ml-4 flex flex-1 flex-col">
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{item.title}</a>
                        </h3>
                        <p class="ml-4">${(item.amount * item.price).toFixed(2)}</p>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">Quantity: {item.amount}</p>
                </div>
                <div class="flex flex-1 items-end space-x-10 text-sm">
                    <Button
                        size="small"
                        disableElevation
                        variant="contained"
                        onClick={() => removeFromCart(item.id)}
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
