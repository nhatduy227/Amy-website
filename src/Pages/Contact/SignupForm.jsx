import React, { useRef } from 'react';

export default function SignupForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (cartItems.length === 0) {
            alert("Cannot Create Order with an empty cart.")
            return
        }
        handleOrderCreation();
        var templateParams = {
            to_email: userInfo.email,
            to_name: userInfo.username,
            message: "All the items in this order: " + cartItems.map(p => p.productName.toString())
        };

        emailjs.send('service_d1gsomh', 'template_83mczqc', templateParams, '1Do_dEWDJTYoZl4Ia')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <h2 class="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`cart.user info`)}</h2>
            <div className="flex flex-col justify-left items-center">
                <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
                <div className="mb-4">
                    <label htmlFor="name" className="block text-primary-default font-medium mb-2">{t(`cart.username`)}</label>
                    <input
                        required
                        className="w-[660px]"
                        type="text"
                        name="username"
                        placeholder={t(`cart.username`)}
                        value={userInfo.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-primary-default font-medium mb-2">{t(`cart.phone`)}</label>
                    <input
                        required
                        className="w-[660px]"
                        type="phone"
                        name="phone"
                        placeholder="xxx-xxx-xxxx"
                        value={userInfo.phone}
                        onChange={formatPhoneNumber}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-primary-default font-medium mb-2">{t(`cart.address`)}</label>
                    <input
                        required
                        className="w-[660px]"
                        name="address"
                        placeholder={t(`cart.address`)}
                        value={userInfo.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-primary-default font-medium mb-2">{t(`cart.email`)}</label>
                    <input
                        required
                        className="w-[660px]"
                        name="email"
                        placeholder={t(`cart.email`)}
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <h2 class="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`cart.order confirmation`)}</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
                {cartItems.length === 0 ? <p class="text-primary-default font-medium text-center" id="slide-over-title">{t(`cart.no item`)}</p> : null}
                {cartItems.map((item) => (
                    <CartItem
                        key={item.productId}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))}
            </div>

            <div class="text-primary-default font-medium text-center">
                <p>{t(`cart.total`)}: {calculateTotal(cartItems)} VND</p>
            </div>
            <h2 class="text-primary-default text-center text-[24px] font-semibold mt-5">{t(`cart.payment instruction`)}</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center w-[660px] h-[2px] bg-primary-default my-6" />
                <div class="bg-gray-200 p-4 rounded w-[660px]">
                    <p class="text-gray-700">Thông tin tài khoản cho khách mua lẻ khi đặt hàng: BÙI THỊ ÁNH - Số tài khoản: 060199027754 - Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - PGD An Phú – TP HCM</p>
                </div>
            </div>

            <div class="mt-6">
                <input class="bg-blue-500 text-white py-2 px-4 mx-auto block" type="submit" value={t(`cart.buy`)} />
            </div>
        </form>
    )
}
