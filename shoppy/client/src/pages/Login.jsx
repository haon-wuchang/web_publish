import React from 'react';
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState,useRef } from 'react';
import {validateLogin} from '../utils/funcValidate.js';
import axios  from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({'id':'', 'pwd':''});

    // 로그인 폼 데이터 입력 함수
    const handleChangeForm = (event) => {
        const {name, value} = event.target;  
        setFormData( {...formData, [name]:value});
    } 

    const refs = {
        'idRef' : useRef(null),
        'pwdRef' : useRef(null)
    }
    const msgRefs = {
        'msgRef' : useRef(null)
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();          
        if(validateLogin(refs,msgRefs)){  
            console.log('send',formData);
        
        // 2. formData 노드서버로 전송
        axios.post('http://localhost:9000/member/login',formData)
                // 11. 컨트롤러에서 result_rows 잘 받아오는지 확인
                .then(res => console.log('res=========',res.data))
                .catch(error => console.log(error));




                

        }      
    }


    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            <form className="login-form" onSubmit={handleLoginSubmit} >
                <ul>
                    <li>
                        <p className="login-form-message">✔ 아이디와 비밀번호를 입력하신 후, 로그인을 진행해주세요.</p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaUser/></span>
                            <input type="text" 
                                    name="id" 
                                    id="id" 
                                    onChange={handleChangeForm}
                                    ref = {refs.idRef}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <p id="error-msg-id"></p>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <span className="login-form-input-icons"><FaLock/></span>
                            <input type="password" 
                                    name="pwd" 
                                    id="pwd" 
                                    onChange={handleChangeForm}
                                    ref = {refs.pwdRef}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
                    </li>
                    <li>
                        <span style = {{'fontSize':'0.7rem','color':'white'}} ref={msgRefs.msgRef}>
                            아디 비번을 입력해주세요
                        </span>
                    </li>
                    <li>
                        <button type="submit" className="login-button">로그인</button>
                    </li>
                    <li>
                        <div  className="login-form-checkbox">
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label>
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a> 
                            <span>&gt;</span>
                            <a href="#">패스워드 찾기</a> 
                            <span>&gt;</span>
                        </div>
                    </li>
                    <li>
                        <button type="submit" className="login-button-naver">네이버 로그인</button>
                    </li>
                </ul>
                <div className="loginplus-image">
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png" alt="" />
                </div>
            </form>
        </div>
    );
}

