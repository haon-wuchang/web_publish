import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup} from '../utils/funcValidate.js';  // 함수 임포트할때는 {} 이거로 묶어야함

export default function Signup() {
    const initData = {'id':'', 'pwd':'','cpwd':'','name':'','phone':'','emailname':'','emaildomain':''}
    const [formData, setFormData] = useState(initData);
    
    const handleForm = (event) => {
        const {name, value } = event.target;
        
        setFormData({...formData, [name]:value});        
    }
    
    const refs = {
         'idRef' : useRef(null),
         'pwdRef' : useRef(null),
         'cpwdRef' : useRef(null),
         'nameRef' : useRef(null),
         'phoneRef' : useRef(null),
         'emailnameRef' : useRef(null),
         'emaildomainRef':useRef(null)
    }

    const handleCheck = (event) => {
        event.preventDefault();
        if(validateSignup(refs)){
            console.log(formData);            
        }
    }    

    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleCheck} className="signup-form">
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span id="error-msg-id">아이디를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="id"
                                    id="id"
                                    onChange={handleForm}
                                    ref = {refs.idRef}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" >중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                        <span id="error-msg-pwd">12자 이내의 비밀번호를 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    id="pwd"
                                    onChange={handleForm}
                                    ref = {refs.pwdRef}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                        <span id="error-msg-cpwd">비밀번호 확인을 입력해주세요</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    id="cpwd"
                                    onChange={handleForm}
                                    ref = {refs.cpwdRef}
                                    placeholder="비밀번호 재입력" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                        <span id="error-msg-name">이름을 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    id="name"
                                    onChange={handleForm}
                                    ref = {refs.nameRef}
                                    placeholder="이름을 입력해주세요" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>휴대폰번호</b></label>
                        <span id="error-msg-phone">휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    onChange={handleForm}
                                    ref = {refs.phoneRef}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span id="error-msg-emailname">이메일 주소를 입력해주세요</span>
                        <div>
                            <input type="text" 
                                    name="emailname"
                                    id = "emailname"
                                    onChange={handleForm}
                                    ref = {refs.emailnameRef}
                                    placeholder="이메일 주소" />
                            <span>@</span>       
                            <select name="emaildomain" 
                                    id="emaildomain"
                                    onChange={handleForm} 
                                    ref = {refs.emaildomainRef} >
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


