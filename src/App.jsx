// src/App.js
import React from 'react';
import './App.css'; // Import the CSS file for App component
import UserList from './UserList.jsx';

export default function App(){
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Welcome to the User List App</h1>
            </header>
            <UserList/>
        </div>
    );
};

