import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup,handleDuplicateIdCheck,handlePassword} from '../utils/funcValidate.js';  
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';

export default function Signup() {
    const {names,placehol,labels, initData} = initSignup();
    const {refs,msgRefs} = useInitSignupRefs(names);  // 얘랑 위에꺼랑 순서바뀌면안댕
    //   왜나면 initSignup 에 names 가 있으니까 useInitSignupRefs 얘를 먼저쓰면 names값을 못받아옴 

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

    // 비번 체크 onBlur 
     const handlePassword = () => {
        if(refs.current['pwdRef'].current.value===''){
            msgRefs.current['pwdRef'].current.style.setProperty('color','red');
            refs.current['pwdRef'].current.focus();
            return false;
        } else if(refs.current['cpwdRef'].current.value==='') {
            msgRefs.current['cpwdRef'].current.style.setProperty('color','red');
            refs.current['cpwdRef'].current.focus();
            return false;
        }else {
            if(refs.current['pwdRef'].current.value!==refs.current['cpwdRef'].current.value){
                alert('비번일치 x');
                refs.current['pwdRef'].current.value = '';
                refs.current['cpwdRef'].current.value = '';
                refs.current['pwdRef'].current.focus();      
                return false;         
            } else if (refs.current['pwdRef'].current.value===refs.current['cpwdRef'].current.value) {
                alert('ok');
                refs.current['nameRef'].current.focus();
                return false;
            }
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
                                                <input type= {  // pwd,cpwd 는 type=password 로 나머지는 text 로
                                                        (name==='pwd' || name==='cpwd') ? 'password': 'text'  }                                                                                                                                                                                                                        
                                                    name={name}
                                                    // id="id"
                                                    onChange={handleForm}
                                                    onBlur={(name==='cpwd')? ()=>{handlePassword(
                                                        refs.current['pwdRef'],
                                                        msgRefs.current['pwdRef'],
                                                        refs.current['cpwdRef'],
                                                        msgRefs.current['cpwdRef'],
                                                        refs.current['nameRef']
                                                    )} : null
                                                        // !!!함수도 객체니까 cpwd 아닐때는 얘 주소주면 안대니까 null 한거임
                                                    }
                                                    ref = {refs.current[name.concat('Ref')]}
                                                    placeholder = {placehol[name]} /> 
                                                    { name==='id' && 
                                                    <>
                                                        <button type="button" 
                                                            onClick={()=>{handleDuplicateIdCheck(
                                                                    refs.current['idRef'],
                                                                    msgRefs.current['idMsgRef'],
                                                                    refs.current['pwdRef']
                                                                )   
                                                            }}>
                                                                중복확인</button>
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


