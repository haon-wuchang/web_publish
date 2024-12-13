import React, { useState } from 'react';

export default function Login() {
    const [id, setId] = useState('');  //입력되는 아이디를 저장할 변수 선언
    const [password, setPassword] = useState(''); //입력되는 비번을 저장할 변수 선언

    const handleChangeId = (event) => {  //event 라는 이름은 아무이름이나 써도 상관업음 ㅋ
        setId(event.target.value); //인풋에 값을 입력하면 id 가 해당값을 받아온다
        // console.log(event.target.value);
    }
    const handleChangePass = (e)=> {
        setPassword(e.target.value);
        console.log(e.target.value);
        
    }

    return (
        <div>
            <h1>로그인</h1>
            <form name="login-form">
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
//버튼타입 서브밋은 인풋창에 아이디 비밀번호 치고 로그이버튼누르면 홈페이지 주소에 아디비번값나오게된다

//아디 비번 입력하면 브라우저가 알아서 이벤트를 처리해서 화면에 출력해주는데
// 이렇게 나온 값을 리액트가 받아오지못함다
//그래서 해당파일처럼 값을 다 받아오게 작성해야한다
