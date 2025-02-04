import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup,handleDuplicateIdCheck,handlePassword} from '../utils/funcValidate.js';  
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate(); 

    const {names,placehol,labels, initData} = initSignup();
    const {refs,msgRefs} = useInitSignupRefs(names);  

    const [formData, setFormData] = useState(initData);     
    const[idCheckResult,setIdCheckResult] = useState('default');  

    const handleForm = (event) => {
        const {name, value } = event.target;        
        setFormData({...formData, [name]:value});        
    }  

    const handleCheck = (event) => {
        event.preventDefault();
        if(validateSignup(refs,msgRefs)){  
            if(idCheckResult==='default'){
                alert('중복체크진행해');
                return false;
            } else {
                console.log(formData);   
                axios.post('http://localhost:9000/member/signup',formData)
                    .then(res => {
                        if(res.data.result_rows === 1){ 
                            alert('회원가입성공');

                                setTimeout(()=>{
                                    navigate('/login');        
                                },1000);   
                        } else{
                            alert('회원가입 실패');
                        }
                    })                     
                    .catch(error => {  
                        alert('회원가입 실패');
                        console.log(error);                        
                    });
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
                                                    onChange={handleForm}
                                                    onBlur={(name==='cpwd')? ()=>{handlePassword(
                                                        // refs,msgRefs 이케해도 되던뎅 ?? ㅇㅇ 얘네 많아지면 걍 refs 이케 넘겨도댕ㄷ댕
                                                        refs.current['pwdRef'],
                                                        refs.current['cpwdRef'],
                                                        refs.current['nameRef'],
                                                        msgRefs.current['pwdRef'],
                                                        msgRefs.current['cpwdRef']
                                                    )} : null                                                    
                                                    }
                                                    ref = {refs.current[name.concat('Ref')]}
                                                    placeholder = {placehol[name]} /> 
                                                    { name==='id' && 
                                                    <>
                                                        <button type="button" 
                                                            onClick={()=>{handleDuplicateIdCheck(
                                                                    refs.current['idRef'],
                                                                    msgRefs.current['idMsgRef'],
                                                                    refs.current['pwdRef'],
                                                                    setIdCheckResult
                                                                )   
                                                            }}>
                                                        중복확인</button>
                                                        <input type="hidden" 
                                                            value={idCheckResult} />
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


