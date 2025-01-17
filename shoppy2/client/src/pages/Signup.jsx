import React from 'react';
import '../style/signup.css';
import {validate} from '../utils/func_validate.js';
import {useState, useRef} from 'react';

export default function Signup() {
    const names = ['id','pwd','cpwd','name','phone','emailname'];
    const namesKr = ['아이디','비밀번호','비밀번호확인','이름','휴대폰번호','이메일주소'];    
    const placeholderKr = ['아이디를 입력해주세요 6~20자','비밀번호를 특수문자 포함 10~20자','비밀번호를 재입력해주세요','이름입력','휴대폰번호를 - 포함하여 입력해주세요','이메일주소'];    
    
    const initData = names.reduce((acc,name)=>{
        acc[name] = '';
        return acc;
    },{});
    const [formdata, setFormData ] = useState(initData);

    const refs = useRef(
        names.reduce((acc,name)=>{
        acc[name.concat('Ref')] = React.createRef();
        return acc;
        },{})
    );
    refs.current['emaildomainRef'] = React.createRef();

    const labels = names.reduce((acc,name,index)=>{
        acc[name] = namesKr[index];
        return acc;
    },{});
    // console.log(labels);
    
    const placeholders = names.reduce((acc,name,index)=>{
        acc[name] = placeholderKr[index];
        return acc;
    },{});

    const msgRefs = useRef(
        names.reduce((acc,name)=>{
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    },{})
);

    const handleForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formdata, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate(refs,msgRefs)){
            console.log(formdata);      
        }
    }



    return (
        <div className="content">
            <h1 className="center-title">SIGINUP</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <ul>
                   { 
                    names&& names.map((name)=>(
                        <li>
                            <label for="" ><b>{labels[name]}</b></label>
                            <span id="error-msg-id" ref={msgRefs.current[name.concat('MsgRef')]}>{labels[name]}를 입력해주세요</span>
                            <div>
                                {
                                    (name==='emailname') ? (
                                    <>
                                        <input type="text" 
                                                name={name}
                                                onChange={handleForm}
                                                ref={refs.current[name.concat('Ref')]}
                                                placeholder= {placeholders[name]} />
                                        <span>@</span>       
                                        <select name="emaildomain" 
                                                id="emaildomain"  
                                                onChange={handleForm}
                                                ref={refs.current['emaildomainRef']}>
                                            <option value="default">선택</option>
                                            <option value="naver.com">naver.com</option>
                                            <option value="gmail.com">gmail.com</option>
                                            <option value="daum.net">daum.net</option>
                                        </select>
                                    </>
                                    ) : (
                                    <>
                                        <input type="text" 
                                            name={name}
                                            onChange={handleForm}
                                            ref={refs.current[name.concat('Ref')]}
                                            placeholder = {placeholders[name]}/>
                                        {name === 'id' &&
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
                    ))                   
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


