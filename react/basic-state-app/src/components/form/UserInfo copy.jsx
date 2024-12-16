import React, { useState } from 'react';

export default function UserInfo() {
    const initform = {'name' :'','address':'','age':''};  //form에 잇는 데이터를 저장하는 저장소 선언
    const [form,setForm] = useState(initform); //useState가 form 값을 관리한다=>form 값이 바뀌면 바로바로 리턴한다

//name과 address가 변경(onChange) 될때마다 실행되는 함수 선언
    const handleChange = (event) => {
        const {name,value}= event.target; 
        setForm({...form,[name]:value});
    } 
    const handleSubmit = (event) => {
        event.preventDefault();  //💥 
        console.log(form);
    //전송버튼을 누르면 해당 함수가 실행되니까 여기서 콘솔창에 찍어보는거지 잘 나오나
    }
    return (
        <div>
            <h1>유저 정보</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">이름</label>
                        <input type="text" name='name' value={form.name} onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="">주소</label>
                        <input type="text" name='address' value={form.address} onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="">나이</label>
                        <input type="text" name='age' value={form.age} onChange={handleChange}/>
                    </li>
                    <li>
                        <button type='submit'>전송</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


