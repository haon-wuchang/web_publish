import React from 'react';
import UserInfo from './UserInfo.jsx';
import Login from './Login.jsx';
import CgvLoginForm from './CgvLoginForm.jsx';

export default function AppForm() {
    return (
        <div>
            <Login />
            <hr />
            <UserInfo />
            {/* <CgvLoginForm /> */}
        </div>
    );
}

