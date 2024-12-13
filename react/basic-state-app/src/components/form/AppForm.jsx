import React from 'react';
import UserInfo from './UserInfo.jsx';
import Login from './Login.jsx';

export default function AppForm() {
    return (
        <div>
            <Login />
            <hr />
            <UserInfo />
        </div>
    );
}

