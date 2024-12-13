import React, { useState } from 'react';

export default function UserInfo() {
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();  //💥
        console.log(event);
        
    }
    const handleChangeName = (event) => {setName(event.target.value);}
    const handleChangeAddress = (event) => {setAddress(event.target.value);}
    
    return (
        <div>
            <h1>유저 정보</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">이름</label>
                        <input type="text" name='name' value={name} onChange={handleChangeName}/>
                    </li>
                    <li>
                        <label htmlFor="">주소</label>
                        <input type="text" name='address' value={address} onChange={handleChangeAddress}/>
                    </li>
                    <li>
                        <button type='submit'>전송</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


