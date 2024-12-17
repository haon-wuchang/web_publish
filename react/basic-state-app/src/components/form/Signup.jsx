import React, { useRef, useState } from 'react';
import './commons.css';
import './cgv.css';
import {validateSignUp} from '../../apis/validate.js';
import {errorCheckSignup} from '../../apis/errorCheck.js';
import { initFormNames } from '../../apis/initial-reduce.js';
import { handleIdCheck } from '../../apis/validate.js';
import { handlePasswordCheck } from '../../apis/validate.js';

export default function Signup() {
    const initArray = ['id','pw','pwcheck','name','phonenumber',
                        'emailname','emaildomain'];
                            
    const [formData, setFormData] = useState(initFormNames(initArray));

    const [error, setError] = useState(initFormNames(initArray));
    const idMsgRef = useRef(null);
    const pwMsgRef = useRef(null);
    const refs = {
        idRef : useRef(null),
        pwRef : useRef(null),
        pwcheckRef : useRef(null),
        nameRef : useRef(null),
        phonenumberRef : useRef(null),
        emailnameRef : useRef(null),
        emaildomainRef : useRef(null)
    }

    //폼의 입력이 변경되는 경우 호출되는 함수
    const handleChangeSignup = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        idMsgRef.current.style.setProperty('color','red'); // 추가 : 사용가능한아디입니다 가 파란색으로 나오자나 거기서 아디를 다시 test 로 하면 파란글씨로 중복된 아디입니다 이케 떠서 걍 초기값을 빨강을 ㅗ준거야
        pwMsgRef.current.style.setProperty('color','red');// 추가
        errorCheckSignup(name,value,error,setError);   
}   

    //폼의 입력이 종료된후 submit 함수 
    const handleSubmitSignup = (event) => {
        event.preventDefault();
        const param = {'refs':refs,'error':error, 'setError':setError};
        if(validateSignUp(param)) console.log(formData);
    }

    // const handleIdCheck = () => {  //추가
    //     const idV = refs.idRef.current;
    //     if(idV.value===''){
    //         errorCheckSignup('id',idV.value,error,setError);            
    //     }else {
    //         const did = 'test';
    //         if(idV.value===did){
    //             setError({...error,['id']:'사용중인 아이디입니다'});
    //             idV.focus();
    //         }else{
    //             setError({...error,['id']:'사용가능한 아이디입니다'});
    //             idMsgRef.current.style.setProperty('color','blue');
    //         }
    //     }
    // }
    // const handlePasswordCheck = () => { //추가
    //     const pwV =refs.pwRef.current;
    //     const pwcV = refs.pwcheckRef.current;
    //     if(pwV.value===''){
    //         errorCheckSignup('pw',pwV.value,error,setError);
    //         pwV.focus();
    //     } else if(pwcV.value===''){
    //         errorCheckSignup('pwcheck',pwcV.value,error,setError);
    //         pwcV.focus();
    //     }else{
    //         if(pwV.value===pwcV.value){
    //             setError({...error, ['pw']:'비밀번호가 일치합니다'});
    //             pwMsgRef.current.style.setProperty('color','blue');
    //         }else{
    //             setError({...error, ['pw']:'비밀번호가 일치하지않습니다'});
    //             //화면관리는 formData가 하니까 formData를 지워야함
    //             setFormData({...formData,['pw']:'',['pwcheck']:''});
    //             refs.pwcheckRef.current.focus();
    //         }
    //     }
    // }

    return (
        <div className="content">
            <div className="join-form center-layout">
                <h1 className="center-title">회원가입</h1>
                <form onSubmit={handleSubmitSignup}>
                    <ul> 
                        <li>
                            <label for="" className="join-title-font">아이디</label>
                            <span ref={idMsgRef}>{error.id}</span>
                            <div>
                                <input 
                                    type="text" 
                                    name="id" 
                                    value={formData.id}
                                    placeholder="아이디 입력(6~20자)"
                                    onChange={handleChangeSignup} 
                                    ref={refs.idRef}/>
                                <button type='button' onClick={handleIdCheck(refs,errorCheckSignup,error,setError,idMsgRef)}>중복확인</button>
                            </div>
                        </li>
                        <li>
                            <label for="" className="join-title-font">비밀번호</label>
                            <span ref={pwMsgRef}>{error.pw}</span>
                            <div>
                                <input 
                                    type="password" 
                                    name="pw" 
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 8~20자)" 
                                    onChange={handleChangeSignup}
                                    value={formData.pw}
                                    ref={refs.pwRef}/>
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
                                    onChange={handleChangeSignup}
                                    value={formData.pwcheck}
                                    ref={refs.pwcheckRef}
                                    onBlur={handlePasswordCheck(refs,errorCheckSignup,error,setError,pwMsgRef,setFormData,formData)}/> 
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
                                    onChange={handleChangeSignup}
                                    value={formData.name}
                                    ref={refs.nameRef}/>
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
                                    onChange={handleChangeSignup}
                                    value={formData.phonenumber}
                                    ref={refs.phonenumberRef}/>
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
                                    onChange={handleChangeSignup}
                                    value={formData.emailname}
                                    ref={refs.emailnameRef}/>
                                <span>@</span>
                                <select name="emaildomain" ref={refs.emaildomainRef}
                                    value={formData.emaildomain} onChange={handleChangeSignup}>
                                    <option value="default">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="daum.net">daum.net</option>
                                </select>
                                <span>{error.emaildomain}</span>
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

