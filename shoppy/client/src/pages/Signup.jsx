import React from 'react';
import '../styles/signup.css';
import { useState , useRef } from 'react';
import {validateSignup} from '../utils/funcValidate.js';  

// 1/17 수업 ========================================================
export default function Signup() {
    const names = [ 'id','pwd','cpwd','name','phone','emailname'];      

// acc 에 실행한 결과가 누적되고 리턴됨 
    // 방법 2 reduce() 사용  reduce를 사용해서 나온값을 리턴받을 initdata 선언
    const initData = names.reduce((acc,name) =>{
        //실행코드
        acc[name] =''; // 근데 = 했는데 결과값에는 : 왜 이케나옴????????
        // 계속 reduce 를 name 이 끝날때까지 돌리고 return 한다
        // 결과값 return
        return acc;   // [name] : '' 이 acc 여기에 차곡차곡 쌓여야한다 그래서 쌓인데이터를 가지고있는 acc 를 리턴함
    },{});  //  
    //name => 배열에 있는 하나하나의 값들임. id. pwd ....
    // console.log('reduce',initData);

    const [formData, setFormData] = useState(initData);
    
    const handleForm = (event) => {
        const {name, value } = event.target;
        
        setFormData({...formData, [name]:value});        
    }   

    const refs = names.reduce((acc,name)=>{
        acc[name.concat('Ref')] = React.createRef(); 
        return acc;
    },{});
    console.log('Refs',refs);

// 함수안에서 이름 바꿀때는 앞에 msg 붙이기가 힘들어서 뒤에 붙이도록 해야한다 !!
    const msgRefs = names.reduce((acc, name)=>{ //idMsgRef  이렇게 만들거임
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
    },{});
    console.log('msg',msgRefs);

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
                                    <label for="" ><b>아이디</b></label>
                                    <span ref={msgRefs.idMsgRef}>아이디를 입력해주세요</span>
                                    <div>
                                        {(name === 'emailname') ? 
                                            (
                                                <>
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
                                                </>
                                            ): 
                                            (
                                                <>
                                                <input type="text"  
                                                    name="id"
                                                    id="id"
                                                    onChange={handleForm}
                                                    ref = {refs.idRef}
                                                    placeholder = "아이디 입력(6~20자)" />
                                                    <button type="button" >중복확인</button>
                                                <input type="hidden" id="idCheckResult" value="default" />
                                                </>
                                            )}
                                    </div>
                                </li>
                        ) )  // map end                                            
                    }


{/* 
                    <li>
                        <label for="" ><b>아이디</b></label>
                        <span ref={msgRefs.idMsgRef}>아이디를 입력해주세요</span>
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
                        <span ref={msgRefs.pwdMsgRef}>12자 이내의 비밀번호를 입력해주세요</span>
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
                        <span ref={msgRefs.cpwdMsgRef}>비밀번호 확인을 입력해주세요</span>
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
                        <span ref={msgRefs.nameMsgRef}>이름을 입력해주세요</span>
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
                        <span ref={msgRefs.phoneMsgRef}>휴대폰번호를 입력해주세요('-' 포함)</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    id="phone"
                                    onChange={handleForm}
                                    ref = {refs.phoneRef}
                                    placeholder="휴대폰 번호 입력('-' 포함)" />
                        </div>
                    </li> */}
                    {/* <li>
                        <label for=""><b>이메일 주소</b></label>
                        <span ref={msgRefs.emailnameMsgRef}>이메일 주소를 입력해주세요</span>
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
                    </li> */}
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset">가입취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


