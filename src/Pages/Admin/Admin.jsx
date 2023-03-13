import React, { useState } from "react";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
export default function Admin() {
    const initialState = {
        name: "",
        price: "",
    };
    const [data, setData] = useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handlePostProduct = async () => {
        const collectionRef = collection(db, "Products")
        const payload = { productName: data.name, productPrice: data.price }
        setData(initialState)
        await addDoc(collectionRef, payload).then(() => console.log("submitted"))
    }
    return (
        <div>
            <label>Product Name</label>
            <input
                type="text"
                id="name"
                onChange={handleInputChange}
                value={data.name}
                name="name" />
            <label>Product Price</label>
            <input
                type="number"
                min="1000"
                step="1000"
                max="1000000"
                onChange={handleInputChange}
                name="price"
                id="price"
                value={data.price} />
            <button onClick={handlePostProduct} type="submit">Submit</button>
        </div>
    )
}
