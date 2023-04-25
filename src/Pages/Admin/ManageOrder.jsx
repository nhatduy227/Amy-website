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
    const markOrderAsCompleted = (orderId) => {
        console.log(orderId)
    }
    const deleteOrder = (orderId) => {
        console.log(orderId)
    }
    useEffect(() => {
        fetchData();
    }, [order]);
    const OrderCard = ({ order }) => (
        <div class="ml-4 flex flex-1 flex-col">
            <div class="flex flex-row">
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-primary-default font-semibold">Customer Name</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{order.userInfo.username}</a>
                    <p class="mt-2 text-gray-500">Order Status: {order.status}</p>
                    <div class="mt-4">
                        <span class="text-gray-500 font-bold text-xl">{order.price} VND</span>
                        {order.status === "completed" ? <button
                            onClick={() => deleteOrder(order.orderId)}
                            class="ml-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full">
                            Delete
                        </button> :
                            <button
                                onClick={() => markOrderAsCompleted(order.orderId)}
                                class="ml-4 px-4 py-2 text-sm font-medium text-white bg-primary-default rounded-full">
                                Mark as Complete
                            </button>
                        }
                    </div>
                </div>
            </div>
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
