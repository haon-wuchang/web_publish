import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup} from '../utils/funcValidate.js';  
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {
    const {names,placehol,labels, initData} = initSignup();
    const {refs,msgRefs} = useInitSignupRefs(names);

    const [formData, setFormData] = useState(initData);       

    const handleForm = (event) => {
        const {name, value } = event.target;        
        setFormData({...formData, [name]:value});        
    }  
    const handleCheck = (event) => {
        event.preventDefault();
        if(validateSignup(refs,msgRefs)){
            console.log(formData);            
        }
    }    
        
    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleCheck} className="signup-form">
                <ul>
                    {
                        names && names.map((name)=> (
                                <li>
                                    <label for="" ><b>{labels[name]}</b></label>
                                    <span ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]} 을/를 입력해주세요</span>
                                    <div>
                                        {(name === 'emailname') ? 
                                            (
                                                <>
                                                <input type="text" 
                                                    name={name}
                                                    onChange={handleForm}
                                                    ref = {refs.current[name.concat('Ref')]}  
                                                    placeholder={placehol[name]} />
                                                <span>@</span>       
                                                <select name="emaildomain" 
                                                        onChange={handleForm} 
                                                        ref = {refs.current['emaildomainRef']} > 
                                                    <option value="default">선택</option>
                                                    <option value="naver.com">naver.com</option>
                                                    <option value="gmail.com">gmail.com</option>
                                                    <option value="daum.net">daum.net</option>
                                                </select>
                                                </>
                                            ): 
                                            (
                                                <>
                                                <input type="text"  
                                                    name={name}
                                                    // id="id"
                                                    onChange={handleForm}
                                                    ref = {refs.current[name.concat('Ref')]}
                                                    placeholder = {placehol[name]} /> 
                                                    { name==='id' && 
                                                    <>
                                                        <button type="button" >중복확인</button>
                                                        <input type="hidden" id="idCheckResult" value="default" />
                                                    </>
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                </li>
                        ) )  // map end                                            
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


