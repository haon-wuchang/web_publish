import React, { useState } from 'react';

export default function Login() {
    const initForm = {'id':'','password':''};  
    const [form, setForm] = useState(initForm); 

    const handleChangeLoginForm = (event) => {
            const {name, value} = event.target;     
        //form = {id":"" "password" :""}
        //form = {id":"aaaa"}  <- id input 이벤트실행
        //form = {password":"bbbb"}  <- password input 이벤트실행
            setForm({...form, [name]:value});          
    } 
    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(form);  
        // submit(form);   이부분은 나중에 서버 연동할때 배울꺼임
    }

    return (
        <div>
            <h1>로그인</h1>
            <form name="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">아이디</label>
                    <input 
                        type="text" 
                        name="id" 
                        value={form.id} 
                        onChange={handleChangeLoginForm}/>
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input 
                        type="password" name="password" value={form.password} onChange={handleChangeLoginForm}/>
                </div>
                <div>
                    <button type='submit'>로그인</button> 
                </div>
            </form>
        </div>
    );
}
