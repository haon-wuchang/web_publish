import React, { useState,useRef } from 'react'; 

export default function Login() {
    const idRef = useRef(null); 
    const passwordRef = useRef(null);    

    const initForm = {'id':'','password':''};  
    const [form, setForm] = useState(initForm);

    const handleChangeLoginForm = (event) => {
        const {name, value} = event.target; 
        setForm({...form, [name]:value}); 
    } 
    const validate = () => {  
        if(idRef.current.value===''){
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            return false; 
        }else if(passwordRef.current.value===''){
            alert('비밀번호를 입력해주세요');
            passwordRef.current.focus();
            return false;
        }else{
            return true;
        }
        console.log(idRef.current.value); //6
        console.log(passwordRef.current.value); //6 벨리데이트가 실행되는현재시점에서 아이디ref 값을 콘솔로 찍어본다
        //7. 콘솔로찍게되면 빈값이 나온다(언디파인 아님용) ; 언디파인 안나온이유는 인풋입력폼칸의 디폴트값은 문자열이기때문이다.
    }


    const handleSubmit = (event) => {
        event.preventDefault();  
        if(validate()) {//4
            console.log(form);  
        }
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
                        ref={idRef}         
                        value={form.id} 
                        onChange={handleChangeLoginForm}/>
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input 
                        type="password" 
                        name="password" 
                        ref={passwordRef} 
                        value={form.password} 
                        onChange={handleChangeLoginForm}/>
                </div>
                <div>
                    <button type='submit'>로그인</button> 
                </div>
            </form>
        </div>
    );
}
