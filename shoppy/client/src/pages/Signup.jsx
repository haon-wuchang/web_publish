import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup} from '../utils/funcValidate.js';  
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

    // 자바스크립트에서는 return false 안해도된댕 react 는 해야댕
        
        const handleDuplicateIdCheck = () => {
            //id 유효성체크 후 서버연동
            //did =test 는 중복아이디로 하기
            // console.log(refs.current['idRef'].current.value);  // id값 잘가져오는지 확인
            if(refs.current['idRef'].current.value===''){
                msgRefs.current['idMsgRef'].current.style.setProperty('color','red');
                refs.current['idRef'].current.focus();
                return false;
            }else {
                let did = 'test';  // => db의 pk 얌 중복데이터 들어가면 안대니꺠 얘를 나중에 db 에서 가져와야대
                if(refs.current['idRef'].current.value=== did){
                    alert('이 아디는 사용불가 다른거 써');
                    // test 하면 입력칸 내용 다 지워지게 어케하더라
                    refs.current['idRef'].current.focus();
                    return false;
                } else {
                    alert('good');
                    refs.current['pwdRef'].current.focus();
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
                                                    ref = {refs.current[name.concat('Ref')]}
                                                    placeholder = {placehol[name]} /> 
                                                    { name==='id' && 
                                                    <>
                                                        <button type="button" 
                                                            onClick={handleDuplicateIdCheck}>중복확인</button>
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


