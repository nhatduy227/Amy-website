import React, { useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";

export default function SignupForm() {
    const form = useRef();
    // const { t } = useTranslation();
    const initialState = {
        username: "",
        phone: "",
        email: "",
        customerType: "Đại lý",
        productType: "Trân châu",
        message: ""
    }


    const [userInfo, setUserInfo] = useState(initialState)
    console.log(userInfo)
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

    const handleRequestCreation = async () => {
        const collectionRef = collection(db, "request")
        const payload = { userInfo: userInfo }
        await addDoc(collectionRef, payload).then(() => alert("Request Submitted"))
    }

    const sendEmail = (e) => {
        e.preventDefault();
        handleRequestCreation()

        var templateParams = {
            to_email: userInfo.email,
            to_name: userInfo.username,
            message: "Khách hàng: " + userInfo.customerType.toString() + "- Sản phẩm quan tâm: " + userInfo.productType.toString() + ". \n Tin Nhắn: " + userInfo.message.toString()
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
                        name="email"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <div className="flex space-x-4">
                        <div className='w-[330px]'>
                            <label htmlFor="email" className="block text-white font-medium mb-2">Vui lòng chọn</label>
                            <select
                                name="customerType"
                                value={userInfo.customerType}
                                onChange={handleInputChange}
                                className="w-[330px] p-2 rounded-lg block">
                                <option>Đại lý</option>
                                <option>Khách mua lẻ</option>
                            </select>
                        </div>
                        <div className='w-[330px]'>
                            <label htmlFor="email" className="block text-white font-medium mb-2">Loại sản phẩm</label>
                            <select
                                name="productType"
                                value={userInfo.productType}
                                onChange={handleInputChange}
                                className="w-[330px] p-2 rounded-lg block">
                                <option>Trân châu</option>
                                <option>Bột gia vị</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div class="relative">
                        <input
                            type="text"
                            class="h-[200px] w-[675px] px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder=""
                        />
                        <label
                            class="absolute top-2 left-4 transition-all duration-300 text-gray-500 pointer-events-none"
                        >
                            Tin nhắn
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <button class="rounded-lg py-3 w-[675px] bg-primary-default text-white">
                        <p class="text-[30px] text-white font-bold"> Đăng Ký </p>
                    </button>
                </div>
            </div>
        </form>
    )
}
