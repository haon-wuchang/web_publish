import React, { useState,useRef } from 'react';
import { validateSignup2 } from '../../apis/validate.js';
import './signup2.css';
import { initFormNames } from '../../apis/initial-reduce.js';

export default function Signup2() {
    const initArray = ['id','pw','name','phone1','phone2','phone3','address', 
            'birth1','birth2','birth3','job','gender','email','introduce'];

    //react 전용 useRef 함수는 custom hook 등을 활용해야한다     
    const refs = {
        idRef : useRef(null),pwRef: useRef(null),nameRef: useRef(null),       
        phone1Ref: useRef(null),phone2Ref: useRef(null),phone3Ref: useRef(null),       
        addressRef: useRef(null), birth1Ref: useRef(null),birth2Ref: useRef(null),       
        birth3Ref: useRef(null),jobRef: useRef(null),genderRef: useRef(null),        
        emailRef: useRef(null),introduceRef: useRef(null)        
    }
    
    const [formData,setFormData] = useState(initFormNames(initArray));

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateSignup2(refs))  console.log(formData);       
    }
    const handleChange = (event) => {  
        const {name, value} = event.target;
        setFormData({...formData, [name]:value}); 
     
    }
    return (
        <div className='container'>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>  
                <ul>
                    <li>
                        <label htmlFor="">아이디 : </label>
                        <input type="text" 
                                value={formData.id}
                                name='id'
                                onChange={handleChange}
                                ref={refs.idRef}
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">비밀번호 : </label>
                        <input type="password"
                                name='pw'
                                value={formData.pw}
                                onChange={handleChange}
                                ref={refs.pwRef} 
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">이름 : </label>
                        <input type="text" 
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                ref={refs.nameRef}
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">전화 : </label>
                        <input type="text" 
                                value={formData.phone1}
                                name='phone1'
                                onChange={handleChange}
                                ref={refs.phone1Ref}
                                className='box'/>-
                        <input type="text" 
                                value={formData.phone2}
                                name='phone2'
                                onChange={handleChange}
                                ref={refs.phone2Ref}
                                className='box'/>-
                        <input type="text" 
                                value={formData.phone3}
                                name='phone3'
                                onChange={handleChange}
                                ref={refs.phone3Ref}
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">주소 : </label>
                        <input type="text" 
                                value={formData.address}
                                name='address'
                                onChange={handleChange}
                                ref={refs.addressRef}
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">생일 : </label>
                        <input type="text" 
                                value={formData.birth1}
                                name='birth1'
                                onChange={handleChange}
                                ref={refs.birth1Ref}
                                className='box'/>/
                        <input type="text" 
                                value={formData.birth2}
                                name='birth2'
                                onChange={handleChange}
                                ref={refs.birth2Ref}
                                className='box'/>/
                        <input type="text" 
                                value={formData.birth3}
                                name='birth3'
                                onChange={handleChange}
                                ref={refs.birth3Ref}
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">직업 : </label>
                        <select name="job" onChange={handleChange}
                                ref={refs.jobRef}>
                            <option value="default">선택</option>
                            <option value="frontend">프론트엔드개발자</option>
                            <option value="backend">백엔드개발자</option>
                            <option value="system">시스템관리자</option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">성별 : </label>
                        <input type='radio'
                                value='male'
                                name='gender'
                                onChange={handleChange}
                                ref={refs.genderRef}/> 남
                        <input type='radio'
                                value='female'
                                name='gender'
                                onChange={handleChange}
                                ref={refs.genderRef}/> 여
                    </li>
                    <li>
                        <label htmlFor="">이메일 : </label>
                        <input type="text" 
                                value={formData.email}
                                name='email'
                                onChange={handleChange}
                                ref={refs.emailRef}
                                className='box'/>
                    </li>
                    <li>
                        <label htmlFor="">자기소개 : </label>
                        <textarea 
                            name="introduce" 
                            cols='50'
                            value={formData.introduce}
                            ref={refs.introduceRef}
                            onChange={handleChange}>                                
                        </textarea>
                    </li>
                    <li>
                        <button type='submit'>가입</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}
//form 안에 submit 버튼타입이 하나만 잇으면 된당 그 버튼이 눌려야 폼이 받아오니깨
