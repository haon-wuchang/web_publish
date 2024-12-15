import React, { useState } from 'react';

export default function UserInfo() {
    const initform = {'name' :'','address':'','age':''};  //form에 잇는 데이터를 저장하는 저장소 선언
    const [form,setForm] = useState(initform); //useState가 form 값을 관리한다=>form 값이 바뀌면 바로바로 리턴한다

//name과 address가 변경(onChange) 될때마다 실행되는 함수 선언
    const handleChange = (event) => {
        const {name,value}= event.target; //구조분해할당으로 {name,value}를 받는거임 => 이 name이랑 value는 input에 잇는 파라미터를 말하는거임?
        //그래서 구조분해할당한 이 값을 setForm에 넣어준다
        setForm({...form,[name]:value});// ... 부분은 기존값이 들어가는거임 'name' :'','address':''
        //그리고 ...form뒤에부분 에서 name 은 프로퍼티값이라서 [] 안에 넣어주엇다
    }
    
//💨아디 비번 칸이 비어잇으면 로그인 버튼 안눌리게 유효성 체크를 해야한다

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


