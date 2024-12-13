import React, { useState } from 'react';

export default function Login() {
    const [id, setId] = useState('');  //입력되는 아이디를 저장할 변수 선언
    const [password, setPassword] = useState(''); //입력되는 비번을 저장할 변수 선언

    const [form, setForm] = useState({});  // 💨이제 여기에 아디 비번 이름 주소 이런걸 다 넣게 하나로 변수를 관리할수잇게 만든다

    const handleChangeId = (event) => {  //event 라는 이름은 아무이름이나 써도 상관업음 ㅋ
        setId(event.target.value); //인풋에 값을 입력하면 id 가 해당값을 받아온다
        console.log(event.target.value);
        
    }
    const handleChangePass = (e)=> {
        setPassword(e.target.value);
    }
    const handleSubmit = (event) => {
        // console.log(event);  //이케하면 로그인버튼눌러도 이벤트가 실행이안된다=> 그말은즉슨 브라우저가 서브밋해서 걍 값을 넘겨버린것이다
        //그래서 버튼눌러서 이벤트 실행하려고하면 브라우저가 실행못하게 중지시켜야한다=>event.preventDefault();
        event.preventDefault(); 
        console.log(event);
        //////////////////////////////////////////////////////////////////
        // 회원가입창에는 아디, 비번, 이름, 주소 등등 개많자나💨
        //그래서 얘 이벤트처리하는 함수도 만들고하면 코드 개길어짐 💨

        // 로그인폼에 입력된 값을 서버에 넘겨주는게 중요하다(node express, was 등등) 💨
        // 로그인폼에 입력된 값이 어떤 형태로 서버에 넘어가는가? 💨
        // 폼에 입력된값들은 {} 오브젝트리터럴 형태에 쌓여서 넘어가게된다. 💨
        // 💨 그리고 아이디 비번 다 나눠져서 넘어갸야대니까 그안에서 또 오브젝트리터럴로 구분되어서 넘어가게된다
        // 최종 넘어가는형태 : { {"id":"aaaa", "password":"dddd",....}} 이런식으로💨
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
//<react form > 이벤트 작업 //
//버튼태그의 서브밋은 인풋창에 아이디 비밀번호 치고 로그이버튼누르면 홈페이지 주소에 아디비번값나오게된다 이 이벤트처리도 브라우저가 하기때문에 이것도 이벤트처리를 리액트가 하게 만들어야한다
//HTML 에서는 인풋창에 아디 비번 입력하면 브라우저가 알아서 이벤트를 처리해서 화면에 출력해주는데
// 리액트에서 인풋을하면 브라우저에서 처리한 아디비번값을 리액트가 받아오지못함다
//그래서 해당파일처럼 값을 다 받아오게 작성해야한다

//onClick 은 버튼이나 인풋 등 에서 사용가능한 함수이고
//onSubmit 은 form 에서 사용가능한 함수이다. 그래서 버튼에 넣으면 실행이 안된다.

//서버에 연동되는폼은 폼태그를 사용하면 되고 폼을 사용하면 안에적은애들은 다 이벤트처리를위한 함수를넣어야하고
//버튼이 잇다면 버튼 타입은 서브밋으로 해야한다(그리고 버튼에는 이벤트 넣기 안댐) 그리고 폼태그에는 온서브밋이라는 함수를 넣어줘야한다.

//버튼타입상관없이 온서브밋이라는 함수가 다 서브밋으로 처리한다