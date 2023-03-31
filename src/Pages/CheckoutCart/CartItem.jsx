import { Button } from "@mui/material";

const CartItem = ({ item, addToCart, removeFromCart }) => (
    <>
        <div>
            <h3>{item.title}</h3>
            <div className="information">
                <p>${item.price}</p>
                <p>${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}
                >
                    {" "}
                    -
                </Button>
                <p>{item.amount}</p>
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
        <img src={item.image} alt={item.title} loading="lazy" />
    </>
);

export default CartItem;
