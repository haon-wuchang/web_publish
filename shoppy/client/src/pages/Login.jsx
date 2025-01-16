import React from 'react';
import '../styles/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState,useRef } from 'react';
import {validateLogin} from '../utils/funcValidate.js';

export default function Login() {
    const [formData, setFormData] = useState({'id':'', 'pwd':''});

    // 로그인 폼 데이터 입력 함수
    const handleChangeForm = (event) => {
        // console.log(event.target.value);  

        // setFormData 에 아디,패스워드 저장 작업
        const {name, value} = event.target;  // => 여기서 name(key) 과 value 만 꺼내오려고 함 => 구조분해할당으로 진행
        // console.log(name, value);

        // setFormData({[name]:value});   //formdata 가 {} 초기값이 이거니까 넣어준거임
            // 프로퍼티 값(id, pwd )이 변수( name ) 에 저장된 경우 [] 로 변수를 묶어준다💥
            // 근데 이케하면 기존의 값들은 저장안되고 마지막에 넣은ㅁ값만 저장되므로
            // 기존의 데이터들도 저장할수있게 스프레드연산자를 사용해야한다
        setFormData( {...formData, [name]:value});
    } 

    const idRef = useRef(null);
    const pwdRef = useRef(null);

    // //유효성 체크 함수 \
    // const validate = () => {
    //     let result = true ;
    //     if(idRef.current.value === ''){
    //         alert('아디입력해');
    //         idRef.current.focus();
    //         result = false ;
    //     }else if(pwdRef.current.value === ''){
    //         alert('비번입력해');
    //         pwdRef.current.focus();
    //         result = false ;    // false 주는 이유는 아직 빈값인데 true 주면 바로 서브밋함수로 값이 넘어가니까 false 준거임
    //     }
    //     return result; // 아디비번 둘다 입력되면 true 값을 반환한다
    // }

    const handleLoginSubmit = (event) => {
        event.preventDefault();          
        // db 에서 null 허용 안하는 값들은 다 유효성체크해야함
        if(validateLogin(idRef,pwdRef)){   //ref 들을 인자로 넘겨줘야함
            console.log('send',formData);
            // 이 데이터를 서버로 전송하면 된다 (react => node.js서버(express) 로 데이터 전송 작업 )
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
                                    ref = {idRef}
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
                                    ref = {pwdRef}
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

