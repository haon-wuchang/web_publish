import React, { useState } from 'react';

export default function Login() {
    const [id, setId] = useState('');  
    const [password, setPassword] = useState(''); 

    const [form, setForm] = useState({});  

    const handleChangeId = (event) => {  
        setId(event.target.value); 
        console.log(event.target.value);
        
    }
    const handleChangePass = (e)=> {
        setPassword(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(event);


        const formData = {
            "id": "aaaa",
            "password":"bbbb"
        };
        ///////////////////////////////////////////////////////////////
    }
    return (
        <div>
            <h1>로그인</h1>
            <form name="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">아이디</label>
                    <input type="text" name="id" value={id} onChange={handleChangeId}/>
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input type="password" name="pass" value={password} onChange={handleChangePass}/>
                </div>
                <div>
                    <button type='submit'>로그인</button> 
                </div>
            </form>
        </div>
    );
}

