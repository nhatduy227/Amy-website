import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase';

export default function ManageOrder() {
    const [order, setOrder] = useState([]);
    const fetchData = async () => {
        const collectionRef = collection(db, 'orders');
        const querySnapshot = await getDocs(collectionRef);
        const documents = querySnapshot.docs.map((doc) => ({ orderId: doc.id, ...doc.data() }))
        setOrder(documents);
    };
    const markOrderAsCompleted = (orderId) => {
        const docRef = doc(db, "orders", orderId);
        const data = {
            status: "completed"
        };

        updateDoc(docRef, data)
            .then(docRef => {
                console.log("A New Document Field has been added to an existing document");
            })
            .catch(error => {
                console.log(error);
            })

    }
    const deleteOrder = (orderId) => {
        const docRef = doc(db, "orders", orderId);
        deleteDoc(docRef)
            .then(docRef => {
                console.log("Document Deleted");
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    const OrderCard = ({ order }) => (
        <div class="p-9">
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="flex justify-between">
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-primary-default font-semibold">Customer Name: {order.userInfo.username}</div>
                        <p class="mt-2 text-gray-500">Order Status: {order.status}</p>
                    </div>
                    <div class="p-8">
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
    return (

        <div className="bg-background-main overflow-hidden pb-28">
            <h1 className="text-primary-default text-center text-[24px] font-semibold mt-5">All Orders</h1>
            {order.map((order) => (
                <OrderCard key={order.orderId} order={order} />
            ))}
        </div>

    )
}
