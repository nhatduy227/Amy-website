import React, { useState } from "react";
import { db } from "../../Firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../../Firebase";
import { v4 } from "uuid";
export default function Admin() {
    const initialState = {
        name: "",
        price: "",
        url: ""
    };
    const [data, setData] = useState(initialState);
    const [imageUpload, setImageUpload] = useState(null);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setData({
                    ...data,
                    url: url
                })
            });
        });
    };
    const handlePostProduct = async () => {
        const collectionRef = collection(db, "Products")
        uploadFile()
        const payload = { productName: data.name, productPrice: data.price, productFile: data.url }
        console.log(payload)
        // const payload = { productName: data.name, productPrice: data.price }
        setData(initialState)
        await addDoc(collectionRef, payload).then(() => console.log("submitted"))
    }
    return (
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Product Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    onChange={handleInputChange}
                    value={data.name}
                    name="name"
                    placeholder="Product Name" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Product Price
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    min="1000"
                    step="1000"
                    max="1000000"
                    onChange={handleInputChange}
                    name="price"
                    id="price"
                    placeholder="0"
                    value={data.price} />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Product Image
                </label>
                <input
                    type="file"
                    onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                    }}
                    name="file"
                    id="file"
                />
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handlePostProduct} >
                    Submit
                </button>
            </div>
        </form>

    )
}
