import React, { useContext } from "react";
import { UserContext } from '../../App';

export default function UserInfo() {
    const user = useContext(UserContext)
    console.log(user.photoURL)
    return (
        <>
            <div>{user.name}</div>
            <p>User Role: {user.isAdmin ? <strong>Admin</strong> : <strong>User</strong>}</p>
        </>

    )
}
