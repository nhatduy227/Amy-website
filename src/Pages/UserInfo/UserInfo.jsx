import React, { useContext } from "react";
import { UserContext } from '../../App';
import profile from '../../Assets/user-profile.jpg';

export default function UserInfo() {
    const user = useContext(UserContext)
    console.log(user.photoURL)
    return (
        <div class="flex items-center justify-center">

            <div class="max-w-xs">
                <div class="photo-wrapper p-2">
                    {/* <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" /> */}
                    <img class="w-32 h-32 rounded-full mx-auto" src={profile} alt="" />

                </div>
                <div class="p-2">
                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user.name}</h3>
                    <div class="text-center text-gray-400 text-xs font-semibold">
                        <p>User Role: {user.isAdmin ? <strong>Admin</strong> : <strong>Customer</strong>}</p>
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

                </div>
            </div>

        </div>

    )
}
