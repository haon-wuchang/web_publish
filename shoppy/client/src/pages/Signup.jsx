import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup} from '../utils/funcValidate.js';  

// 1/17 수업 ========================================================
export default function Signup() {
    const names = [ 'id','pwd','cpwd','name','phone','emailname'];      
    const namesKr = ['아이디','비밀번호','비밀번호확인','이름','휴대폰번호','이메일주소'];
    const placeHolders = ['아이디 입력 6~20자 이내','비밀번호 입력 10~20자 이내 특수문자포함','비밀번호 재입력',
        '이름을 작성해주세요','휴대폰번호 입력 ( - ) 포함','이메일주소 입력'];

    const initData = names.reduce((acc,name) =>{
        acc[name] =''; // 근데 = 했는데 결과값에는 : 왜 이케나옴????????
        return acc;   
    },{});    

    const [formData, setFormData] = useState(initData);
    
    const handleForm = (event) => {
        const {name, value } = event.target;        
        setFormData({...formData, [name]:value});        
    }   
    
    const refs = useRef (
        names.reduce((acc,name)=>{
            acc[name.concat('Ref')] = React.createRef(); 
            return acc;
        },{})
    )
    refs.current['emaildomainRef'] = React.createRef(); 
    
    const msgRefs = useRef(
        names.reduce((acc, name)=>{ 
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
        },{})
    );
    const labels = names.reduce((acc,name,index)=>{
        acc[name] = namesKr[index];    
        return acc;
    },{});

    const placehol = names.reduce((acc,name,index)=>{
        acc[name] = placeHolders[index]; 
        return acc;
    },{});

    const handleCheck = (event) => {
        event.preventDefault();
        if(validateSignup(refs,msgRefs)){
            console.log(formData);            
        }
    }    


        
    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleCheck} className="signup-form">
                <ul>
                    {
                        names && names.map((name)=> (
                            // (name === 'emailname') ? 이메일주소의 구조: 나머지의 구조;
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
                                                <input type="text"  
                                                    name={name}
                                                    // id="id"
                                                    onChange={handleForm}
                                                    ref = {refs.current[name.concat('Ref')]}
                                                    placeholder = {placehol[name]} /> 
                                                    { name==='id' && 
                                                    <>
                                                        <button type="button" >중복확인</button>
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


