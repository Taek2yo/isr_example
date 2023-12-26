'use client'
import { useEffect, useState } from "react";

export default function Csr (){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(
                "https://63046ed0761a3bce77e78e9c.mockapi.io/api/users"
            );
            const users = await res.json();
            setUsers(users)
        }

        fetchData()
    },[])
    console.log(users)
    return (
        <div>
            <h1>Client Side Rendering</h1>
            <ul>
                {users.map((user)=>{
                   return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    )
}