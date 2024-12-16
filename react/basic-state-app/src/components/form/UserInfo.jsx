import React, { useRef, useState } from 'react';
import { validateUserInfo } from '../../apis/validate.js';

export default function UserInfo() {
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const ageRef = useRef(null);

    const initform = {'name' :'','address':'','age':''}; 
    const [form,setForm] = useState(initform); 

    const handleChange = (event) => {
        const {name,value}= event.target; 
        setForm({...form,[name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();   
        const param = {'nameRef':nameRef,'addressRef':addressRef,'ageRef':ageRef}
        if(validateUserInfo(param)) console.log(form);
    }
    return (
        <div>
            <h1>유저 정보</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">이름</label>
                        <input type="text" name='name' value={form.name} 
                            onChange={handleChange} ref={nameRef}/>
                    </li>
                    <li>
                        <label htmlFor="">주소</label>
                        <input type="text" name='address' value={form.address} 
                            onChange={handleChange} ref={addressRef}/>
                    </li>
                    <li>
                        <label htmlFor="">나이</label>
                        <input type="text" name='age' value={form.age} 
                            onChange={handleChange} ref={ageRef}/>
                    </li>
                    <li>
                        <button type='submit'>전송</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


