// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function UserList(){
    const [listOfUsers, setListOfUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    
    return (
        <div className="user-list">
            <h2>List of Users</h2>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


