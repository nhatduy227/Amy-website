import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase';

export default function ManageOrder() {
    const [order, setOrder] = useState([]);
    const fetchData = async () => {
        const collectionRef = collection(db, 'orders');
        const querySnapshot = await getDocs(collectionRef);
        const documents = querySnapshot.docs.map(doc => doc.data());
        setOrder(documents);
    };
    useEffect(() => {
        fetchData();
    }, [order]);
    const OrderCard = ({ order }) => (
        <div >
            <h2>{order.orderId}</h2>
            <p>{order.price}</p>
            <p>{order.status}</p>
            <hr />
        </div>
    );
    const updatedOrder = order.filter((obj) => obj.status === "pending")
    return (
        <div class="flex items-center justify-center">

            <div class="max-w-xs">
                <h1> All Order </h1>
                <hr />
                {updatedOrder.map((order) => (
                    <OrderCard key={order.orderId} order={order} />
                ))}
            </div>
        </div>
    )
}
