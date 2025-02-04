import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup,handleDuplicateIdCheck,handlePassword} from '../utils/funcValidate.js';  
import { initSignup, useInitSignupRefs } from '../utils/funcInitialize.js';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate(); // 11-1.

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
                // 1.  formData를 서버에 보낸다
                    // axios.post('경로',{전송할객체})
                    //     .then(insert성공시 결과받아옴)
                    //     .catch();
                    // 전송할객체 => 컨트롤러에서 받으면 된다
                    // formData 자체가 {} 이니까 {formdata} 이케하면 안댐!!!!
                axios.post('http://localhost:9000/member/signup',formData)
                // 9. 결과값이 then 으로 넘어온다
                    .then(res => {
                        if(res.data.result_rows === 1){ // affectedRows 가 1이면 값 잘 넘어온거니까
                            alert('회원가입성공');
                            // 11. 회원가입 성공 시 로그인페이지로 이동되게 작업
                                // react 에서 페이지 이동 => useNavigate() 사용 (react-router-dom)
                                navigate('/login');
                            


                        } else{
                            alert('회원가입 실패');
                        }
                        // console.log('resdata============',res.data)
                    })                     
                    .catch(error => {  // 10. 네트워크 에러시에도 회원가입 실패니까 내용추가
                        alert('회원가입 실패');
                        console.log(error);                        
                    });
            }
        } 
    }    




/*
    💥💥 다외워랑
    get 방식 : url 을 통해서 호출 및 데이터 전달 => 네트워크를 통해서 넘어갈때 패킷의 헤더에 붙어서 넘어감
        => 서버에서 받을때 req.params 로 받는다
        => /product/:id => :id 이거는 get에서만 사용가능
        => 데이터가 작을때 , 보안이 필요하지않을때 사용 (회원가입,로그인에는 사용금지!)
    post 방식 : url 주소로 경로가 호출되고, 데이터전달은 패킷의 바디에 붙어서 넘어감
        => req.body 로 받음
        => 데이터가 클때, 보안이 필요할 때 사용(로그인,회원가입페이지)
        */

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


