import React, { useState,useRef } from 'react';
import './cgv.css';
import './commons.css';

export default function CgvLoginForm() {
    const init = {'id':'','pw':''};
    const [formData, setFormData] = useState(init);  
    const idRef = useRef(null);
    const pwRef = useRef(null);

    const handleInput = (event) => {
        const {name,value} = event.target;
        setFormData({...formData,[name]:value});
    }
    const validate = () => {
        if(idRef.current.value===''){
            alert('아이디를 입력해주세요요');
            idRef.current.focus();
            return false;
        } else if(pwRef.current.value===''){
            alert('비밀번호를 입력해주세요');
            pwRef.current.focus();
            return false;
        }else{
            return true;
        }
    }

    const handleSubmit = (event) => {    
        event.preventDefault();
        if(validate()) console.log(formData);
        
        
    }
    return (
    <div className="content">
        <div className="login-form center-layout">
            <h1 className="center-title">로그인</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <p>아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.</p>
                    </li>
                    <li>
                        <div className="loginlogo">
                            <i className="fa-regular fa-user"></i>
                            <input 
                                type="text" 
                                name="id" 
                                placeholder='아이디 입력'
                                ref={idRef}
                                onChange={handleInput}/>
                        </div>
                    </li>
                    <li>
                        <div className="loginlogo">
                            <i className="fa-solid fa-lock"></i>
                            <input 
                                type="password" 
                                name="pw" 
                                ref={pwRef}
                                placeholder='비밀번호 입력'
                                onChange={handleInput}/>
                        </div>
                    </li>
                    <li>
                        <button className="button-main-color" type='submit'>로그인</button>
                    </li>
                    <li>
                        <div>
                            <input type="checkbox" name="status" />
                            <label for="">아이디 저장</label> 
                        </div>
                        <div>
                            <a href="#">아이디 찾기</a>
                            <span>&gt;</span>
                            <a href="#">비밀번호 찾기</a>
                            <span>&gt;</span>
                        </div>
                    </li>
                </ul>
                <div>
                    <img src="https://adimg.cgv.co.kr//images/202206/loginplus/350x300.png"/>
                </div>
            </form>
        </div>
    </div>
    );
}
