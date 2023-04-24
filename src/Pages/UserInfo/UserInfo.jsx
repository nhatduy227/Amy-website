import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firebase';
import profile from '../../Assets/user-profile.jpg';

export default function UserInfo() {
    const user = useContext(UserContext)
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
    const updatedOrder = order.filter((obj) => obj.status === "pending" && obj.userEmail === user.email)
    return (
        <div class="flex items-center justify-center">

            <div class="max-w-xs">
                <div class="photo-wrapper p-2">
                    <img class="w-32 h-32 rounded-full mx-auto" src={profile} alt="" />
                </div>
                <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user.displayName}</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                        <p>User Role:  <strong>Admin</strong></p>
                    </div>
                    <table class="text-xs my-3">
                        <tbody><tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                            <td class="px-2 py-2">New York</td>
                        </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                <td class="px-2 py-2">+1 234 567 8910</td>
                            </tr>
                            <tr>
                                <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                <td class="px-2 py-2">{user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1> Your Order </h1>
                    <hr />
                    {updatedOrder.map((order) => (
                        <OrderCard key={order.orderId} order={order} />
                    ))}
                </div>
            </div>

        </div>

    )
}
