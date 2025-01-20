import React, { useState,useRef } from 'react';
import { validateSignup } from '../utils/func_validate.js';
import {initSignup,useInitSignupRef} from '../utils/func_init.js';

export default function Signup() {    
    const {initForm, labels, names} = initSignup();
    const {refs} = useInitSignupRef(names);

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
                            <label ><b>{labels[name]}</b></label>
                            <span>{labels[name]}를 입력해주세요</span>
                            <div>
                                {(name==='emailname') ? (
                                    <>
                                    <input type="text" 
                                            name={name}
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleSignup}
                                            placeholder="이메일 주소" />
                                    <span>@</span>       
                                    <select name="emaildomain" 
                                            onChange={handleSignup}
                                            ref={refs.current['emaildomainRef']}>
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
                                            ref={refs.current[name.concat('Ref')]}
                                            onChange={handleSignup}
                                            placeholder = "아이디 입력(6~20자)" />
                                    {name==='id' && 
                                    <>
                                        <button type="button" >중복확인</button>
                                        <input type="hidden" value="default" />
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

