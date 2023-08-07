import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function SignupForm() {
    const form = useRef();
    const { t } = useTranslation();
    const initialState = {
        username: "",
        phone: "",
        email: "",
        customerType: "",
        productType: "",
        message: ""
    }
    const [userInfo, setUserInfo] = useState(initialState)

    const handleInputChange = event => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    };

    const formatPhoneNumber = (e) => {
        let input = e.target.value;
        input = input.replace(/\D/g, ''); // Remove all non-digit characters
        input = input.slice(0, 10); // Limit to 10 digits
        const formattedPhoneNumber = input.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); // Format as xxx-xxx-xxxx
        setUserInfo({
            ...userInfo,
            [e.target.name]: formattedPhoneNumber
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            to_email: userInfo.email,
            to_name: userInfo.username,
            message: "Thank you for signing up to test our product."
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
            <div className="flex flex-col justify-left items-center mt-10">
                <div className="mb-4 space-x-4">
                    <input
                        required
                        className="w-[330px] p-2 rounded-lg"
                        type="text"
                        name="username"
                        placeholder="Họ và Tên"
                        value={userInfo.username}
                        onChange={handleInputChange}
                    />
                    <input
                        required
                        className="w-[330px] p-2 rounded-lg"
                        type="phone"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={userInfo.phone}
                        onChange={formatPhoneNumber}
                    />
                </div>
                <div className="mb-4">
                    <input
                        required
                        className="w-[675px] p-2 rounded-lg"
                        name="address"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-medium mb-2">Vui lòng chọn</label>
                    {/* <input
                        required
                        className="w-[660px]"
                        name="email"
                        placeholder={t(`cart.email`)}
                        value={userInfo.email}
                        onChange={handleInputChange}
                    /> */}
                </div>
            </div>
        </form>
    )
}
