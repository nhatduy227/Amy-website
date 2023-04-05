import { useContext, useState } from "react";
import { Badge, Drawer } from "@mui/material";
import { useTranslation } from 'react-i18next';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Cart from "./Cart";
import { CartContext } from "../../App";


export default function CheckoutCart() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useContext(CartContext);
    const { t } = useTranslation();

    const handleAddToCart = (clickedItem) => {
        setCartItems((prev) => {
            const isItemInCart = prev.find((item) => item.productId === clickedItem.productId);

            if (isItemInCart) {
                return prev.map((item) =>
                    item.productId === clickedItem.productId
                        ? { ...item, amount: item.amount + 1 }
                        : item
                );
            }
            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems((prev) => {
            return prev.reduce((acc, item) => {
                if (item.productId === productId) {
                    if (item.amount === 1) return acc;
                    return [...acc, { ...item, amount: item.amount - 1 }];
                } else {
                    return [...acc, item];
                }
            }, []);
        });
    };

    // const getTotalItems = (items) =>
    //     items.reduce((acc, item) => acc + item.amount, 0);

    return (
        <>
            <Drawer
                anchor="right"
                open={cartOpen}
                onClose={() => setCartOpen(!cartOpen)}
            >
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <button className="flex no-underline text-base" onClick={() => setCartOpen(true)}>
                {/* <Badge badgeContent={getTotalItems(cartItems)} color="error" /> */}
                <ShoppingCartOutlinedIcon />
                <div className="h-6 ml-1">{t('header.cart')}</div>
            </button>
        </>
    );
}
