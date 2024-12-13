import React, { useState,useRef } from 'react'; //1useRef        ref 는 유효성체크할떄 사용한다

export default function Login() {
    const idRef = useRef(null); // 2(null)에는 객체의 주소값이 들어간다 .브라우저에 실행되면 돔객체에 주소값이 만들어진다
    const passwordRef = useRef(null); // 2,   

    const initForm = {'id':'','password':''};  
    const [form, setForm] = useState(initForm);

    const handleChangeLoginForm = (event) => {
        const {name, value} = event.target; 
        setForm({...form, [name]:value}); 
    } 
    const validate = () => {  //5      방법1
        if(idRef.current.value===''){//8 유효성체크
            alert('아이디를 입력해주세요');
            idRef.current.focus();
            return false; // 9. 이거 잘 적어주래 근데 먼지모르겟음
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

    // const validate = () => {    //방법2
    //     let result=true;
    //     if(idRef.current.value===''){
    //         alert('아이디를 입력해주세요');
    //         idRef.current.focus();
    //         result=false; 
    //     }else if(passwordRef.current.value===''){
    //         alert('비밀번호를 입력해주세요');
    //         passwordRef.current.focus();
    //         result=false;
    //     }
    //         return result;
    // }


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
                        ref={idRef}  //3         
                        value={form.id} 
                        onChange={handleChangeLoginForm}/>
                </div>
                <div>
                    <label htmlFor="">비밀번호</label>
                    <input 
                        type="password" 
                        name="password" 
                        ref={passwordRef} //3
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
