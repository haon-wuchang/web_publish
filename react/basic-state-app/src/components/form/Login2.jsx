import React, { useState,useRef } from 'react';
import { validateLogin2 } from '../../apis/validate.js';

export default function Login2() {
    const initForm = {'id':'','password':''} 
    const [data,setData] = useState(initForm);
    //유효성체크
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    
    const [errorMsg, setErrorMsg] = useState({'id':'','password':''} );  //1

    const handleInput=(event)=>{
        const {name, value} = event.target;
        setData({...data, [name]:value}); 
        if(name === 'id') {  //4 아디 비번이 입력되면 빨간 글씨 없어지게 설정
            (value === '') ? setErrorMsg({...errorMsg, ['id']:'아디입력해'}): 
            setErrorMsg({...errorMsg, ['id']:''}); //4;
        } else  if(name === 'password') {  
            (value === '') ? setErrorMsg({...errorMsg, ['password']:'비번입력해'}): 
            setErrorMsg({...errorMsg, ['password']:''}); //4;
        }
    }
    // const validate = () => {
    //     if(idRef.current.value===''){
    //         // alert('아디입력해');
    //         setErrorMsg({...errorMsg, ['id']:'아디입력해'}); //3 아디비번이 입력되지않으면 빨간글씨로해당내용 뜨게 설정
    //         idRef.current.focus();
    //         return false;  
    //     }else if(passwordRef.current.value===''){
    //         // alert('비번입력해');
    //         setErrorMsg({...errorMsg, ['password']:'비번입력해'}); //3
    //         passwordRef.current.focus();
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const param = {'idRef':idRef,'passwordRef': passwordRef,
            'errorMsg':errorMsg,'setErrorMsg':setErrorMsg};
        if(validateLogin2(param)) console.log(data);  
    }
 
    //2 span 에 해당 변수 값 넣기 {errorMsg.id} {errorMsg.password}
    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}> 
                <ul>
                    <li>
                        <label htmlFor="">아이디</label>
                        <input type="text" name='id' value={data.id}
                            onChange={handleInput} ref={idRef}/>
                        <span style={{'color':'red'}}>{errorMsg.id}</span> 
                    </li>
                    <li>
                        <label htmlFor="">비밀번호</label>
                        <input type="password" name='password' value={data.password}
                            onChange={handleInput} ref={passwordRef}/>
                        <span style={{'color':'red'}}>{errorMsg.password}</span>
                    </li>
                    <button type='submit'>로그인</button>
                </ul>
            </form>
        </div>
    );
}
