import React from 'react';
import '../style/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState,useRef } from 'react';
import {validateLogin} from '../utils/func_validate.js';

export default function Login() {
    const [formData, setFormData] = useState({'id':'','pwd':''});

    const handleLoginForm = (event) => {
        
        const {name,value} = event.target ;        
        setFormData({...formData, [name]:value })        
    }

    // 얘네도 기니까 각기다른 객체들을 묶어 {} 이거 사용, 그리고 객체 전송
        // const idRef = useRef(null);
        // const pwdRef = useRef(null);

    const refs = {
        'idRef' : useRef(null),
        'pwdRef' : useRef(null)
    }

    
    const handleLoginCheck = (event) => {
        if(validateLogin(refs)){  //각각 넘기는게 아니라 통채로 넘김
            console.log(formData);                
        }
        event.preventDefault();
    }


    return (
        <div className="content">
            <h1 className="center-title">LOGIN</h1>
            <form onSubmit={handleLoginCheck} className="login-form">
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
                                    onChange={handleLoginForm}
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
                                    ref = {refs.pwdRef}
                                    onChange={handleLoginForm}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <p id="error-msg-pwd"></p>
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

