import React, { useState,useRef } from 'react';
import { validateSignup } from '../utils/func_validate.js';

export default function Signup() {
    const names = ['id','pwd','cpwd','name','phone','emailname'];
    const namesKr = ['아이디','비밀번호','비밀번호확인','이름','휴대폰','이메일주소'];

    const initForm = names.reduce((acc,name)=>{
        acc[name] = '';
        return acc;
    },{});

    const refs = names.reduce((acc,name)=>{
        acc[name.concat('Ref')] = React.createRef();
        return acc;
    },{});

    const [signupData, setSignupData] = useState(initForm);

    const handleSignup = (e) => {   
        const {name, value} = e.target;
        setSignupData({...signupData, [name]:value});
        
    }

    const handleSubmit = (e) => {
        e.preventDefault(refs);
        if(validateSignup(refs)){
            console.log(signupData);
        }
        
    }


    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <ul>
                    {names.map((name)=>(
                        <li>
                            <label for="" ><b>아이디</b></label>
                            <span id="error-msg-id">아이디를 입력해주세요</span>
                            <div>
                                {(name==='emailname') ? (
                                    <>
                                    <input type="text" 
                                            name="emailname"
                                            id = {name}
                                            ref={refs.emailnameRef}
                                            onChange={handleSignup}
                                            placeholder="이메일 주소" />
                                    <span>@</span>       
                                    <select name="emaildomain" 
                                            id="emaildomain" 
                                            onChange={handleSignup}
                                            ref={refs.emaildomainRef}>
                                        <option value="default">선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                    </>
                                ): (
                                    <>
                                    <input type="text" 
                                            name={name}
                                            id="id"
                                            ref={refs.idRef}
                                            onChange={handleSignup}
                                            placeholder = "아이디 입력(6~20자)" />
                                    {name==='id' && 
                                    <>
                                        <button type="button" >중복확인</button>
                                        <input type="hidden" id="idCheckResult" value="default" />
                                    </>                                    
                                    }        
                                    </>
                                )}
                            </div>
                        </li>  

                    ))
                    }  
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}

