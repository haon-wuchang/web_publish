import React, { useState,useRef } from 'react';
import './cgv.css';
import './commons.css';
//이렇게 함수들을 막 적으면 코드가 너무 길어지니까 
//익스포트 임포트로 함수들을 다른곳에 저장해두고 불러오는 형태로 사용한다 ( 로직분리 )
// => 우선은 validate.js 파일 만들어서 여기에는 유효성체크함수들만 모아놀것이다
import { validate } from '../../apis/validate.js'; //1

export default function CgvLoginForm() {
    const init = {'id':'','pw':''};
    const [formData, setFormData] = useState(init);  
    // const idRef = useRef(null);
    // const pwRef = useRef(null);
    const refs = { //22.
        idRef: useRef(null),  //refs.idRef 이렇게 들어가서 사용해야한다
        pwRef: useRef(null)
    }

    const [error,setError] = useState({'id':'','pw':''});

    const handleInput = (event) => {
        const {name,value} = event.target;
        setFormData({...formData,[name]:value});
        if(name==='id' && value !==''){
            setError({...error,['id']:''});
        } else if (name ==='pw' && value !==''){
            setError({...error, ['pw']:''});
        }
    }

    const handleSubmit = (event) => {    
        event.preventDefault();
        const param = {'refs':refs ,'error':error,'setError':setError}; //33
        // const param = {'idRef':idRef,'pwRef':pwRef,'error':error,'setError':setError}; //3
        // if(validate(idRef,pwRef,error,setError)) console.log(formData);     //   2
        if(validate(param)) console.log(formData);     //   4
    } // 11. 'idRef':idRef,'pwRef':pwRef 도 회원가입창의 내용에 따라 길어질수도 있어서 얘도 따로 오브젝트 리터럴로 만든다
    // =>  const refs = {    }
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
                                ref={refs.idRef} //44
                                onChange={handleInput}/>
                        </div>
                        <p id='error-msg-id' style={{'color':'red'}}>{error.id}</p>
                    </li>
                    <li>
                        <div className="loginlogo">
                            <i className="fa-solid fa-lock"></i>
                            <input 
                                type="password" 
                                name="pw" 
                                ref={refs.pwRef} //44
                                placeholder='비밀번호 입력'
                                onChange={handleInput}/>
                        </div>
                        <p id='error-msg-pwd' style={{'color':'red'}}>{error.pw}</p>
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

