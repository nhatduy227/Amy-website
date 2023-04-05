import { useContext, useState } from "react";
import { Badge, Drawer } from "@mui/material";
import { useTranslation } from 'react-i18next';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Cart from "./Cart";
import { CartContext } from "../../App";


export default function CheckoutCart() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems, handleAddToCart, handleRemoveFromCart, getTotalItems } = useContext(CartContext);
    const { t } = useTranslation();

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
                <Badge badgeContent={getTotalItems(cartItems)} color="error" />
                <ShoppingCartOutlinedIcon />
                <div className="h-6 ml-1">{t('header.cart')}</div>
            </button>
        </>
    );
}
