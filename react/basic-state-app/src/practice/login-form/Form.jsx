import React from 'react';
import {useState} from 'react';

export default function Form() {
    const init = {'id':'','password':''}
    const [data,setData] = useState(init);

    const handleInput = (event) => {
        const {name, value} = event.target;  
        setData({...data, [name]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        
    }
    return (
        <div>
            <h1>로그인폼</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='id'onChange={handleInput}/>
                <input type="password" name='password' onChange={handleInput}/>
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
}

