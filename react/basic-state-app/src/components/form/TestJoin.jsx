import React, { useRef, useState } from 'react';
import './commons.css';
import './cgv.css';
import { validateTest } from '../../apis/validate.js';
import { errorCheckTestJoin } from '../../apis/errorCheck.js';


export default function Signup() {
    const init = {
        'id':'',
        'pw':'',
        'pwcheck':'',
        'name':'',
        'phonenumber':'',
        'emailname':'',
        'emaildomain':''
    }
    const [formData, setFormData] = useState(init);

    const ref = {
        idRef : useRef(null),
        pwRef : useRef(null),
        pwcheckRef : useRef(null),
        nameRef : useRef(null),
        phonenumberRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef: useRef(null)
    }
    const errorr = {
        'id':'',
        'pw':'',
        'pwcheck':'',
        'name':'',
        'phonenumber':'',
        'emailname':'',
    }
    const [error,setError] = useState(errorr);    

    const handleInput = (event) => {
        const {name,value} = event.target;
        setFormData({...formData, [name]:value});
        errorCheckTestJoin(name,value,error,setError);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateTest(ref,error,setError)) console.log(formData);       
    }

    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <ul> 
                        <li>
                            <label for="" className="join-title-font">아이디</label>
                            <span>{error.id}</span>
                            <div>
                                <input 
                                    type="text" 
                                    name="id" 
                                    placeholder="아이디 입력(6~20자)"
                                    value={formData.id}
                                    onChange={handleInput}
                                    ref={ref.idRef}
                                   />
                                <button>중복확인</button>
                            </div>
                        </li>
                        <li>
                            <label for="" className="join-title-font">비밀번호</label>
                            <span>{error.pw}</span>
                            <div>
                                <input 
                                    type="password" 
                                    name="pw" 
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~20자)"
                                    value={formData.pw}
                                    onChange={handleInput}
                                    ref={ref.pwRef} />
                            </div>
                        </li>
                        <li>
                            <label for="" className="join-title-font">비밀번호 확인</label>
                            <span>{error.pwcheck}</span>
                            <div>
                                <input 
                                    type="password" 
                                    name="pwcheck" 
                                    placeholder="비밀번호 재입력" 
                                    value={formData.pwcheck}
                                    onChange={handleInput}
                                    ref={ref.pwcheckRef}/>
                            </div>
                        </li>
                        <li>
                            <label for="" className="join-title-font">이름</label>
                            <span>{error.name}</span>
                            <div>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="이름을 입력해주세요"
                                    value={formData.name}
                                    onChange={handleInput} 
                                    ref={ref.nameRef}/>
                            </div>
                        </li>
                        <li>
                            <label for="" className="join-title-font">전화번호</label>
                            <span>{error.phonenumber}</span>
                            <div>
                                <input 
                                    type="text" 
                                    name="phonenumber" 
                                    placeholder="휴대폰 번호 입력('-'제외 11자리 입력)"
                                    value={formData.phonenumber}
                                    onChange={handleInput} 
                                    ref={ref.phonenumberRef}/>
                            </div>  
                        </li>
                        <li>
                            <label for="" className="join-title-font">이메일주소</label>
                            <span>{error.emailname}</span>
                            <div>
                                <input 
                                    type="email" 
                                    name="emailname" 
                                    placeholder="이메일 주소" 
                                    value={formData.emailname}
                                    onChange={handleInput}
                                    ref={ref.emailnameRef}/>
                                <span>@</span>
                                <select name="emaildomain"  value={formData.emaildomain} ref={ref.emaildomainRef}>
                                    <option value="default">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button type='submit'>가입하기</button>
                            <button type='reset'>가입취소</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

