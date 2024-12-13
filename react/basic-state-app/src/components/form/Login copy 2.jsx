import React, { useState } from 'react';

export default function Login() {
    const initForm = {'id':'','password':''};  //초기값 지정하는 변수 선언=> 여기잇는id는 인풋의 name인 id 이다
    const [form, setForm] = useState(initForm); //initForm 안에 내용을 여기 걍 넣어도되는데 그러면 코드 길어지니까 따로 변수 만들어서 넣은거임

    const handleChangeLoginForm = (event) => {
        //아이디 비번이 변경되면 위에 선언한 setForm 함수를 이용하여 "id":"aaaa" 형식으로 저장하는 함수이다
        const {name, value} = event.target;     //💥

        //그래서 이제 네임,벨류 값을 폼 에다가 넣어주면 된다
        // setForm({[name]:value});  //오브젝트리터럴의 프로퍼티값을 변수로 입력하는 경우에는 [] 로 감싸야한다
        //근데 이케만해주면 아디입력하면 비번은 언디파인나오고 , 아디입력후비번입력하면 비번만 값들어가고 아디는 언디파인이 뜨게된다
        //=>마지막에 입력한 값만 들어가게된다
        //form = {id":"" "password" :""}
        //form = {id":"aaaa"}  <- id input 이벤트실행
        //form = {password":"bbbb"}  <- password input 이벤트실행
    
        // 해결방법 : 스프레드 연산자를 사용한다  => 자바스크립트에서 공부햇으니 다시 복습해라
        setForm({...form, [name]:value}); //기존의 form 값('id':'','password':'')을 가져오고 마지막에는 추가할애를 넣어주면 된다.
        //form = {id":"aaaa" "password" :""}  <- id input 이벤트실행
        //form = {id":"aaaa" "password" :"bbbb"}  <- password input 이벤트실행    
    } //[name] 왜 얘만 [] 이거 한건지 잘모르겟다 위에적긴햇는데 이해가 안가
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
