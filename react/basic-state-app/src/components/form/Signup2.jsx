import React, { useState,useRef } from 'react';
import { validateSignup2 } from '../../apis/validate.js';
import './signup2.css';
import { initFormNames } from '../../apis/initial-reduce.js';

export default function Signup2() {
    const initArray = ['id','pw','name','phone1','phone2','phone3','address', //2
            'birth1','birth2','birth3','job','gender','email','introduce'];
    // const init2 = initArray.reduce((acc,key)=> { //4계산한 콜백의 반환값이 acc 에 들어간다 / acc={'idRef':useRef(null)}; =>{}는 리턴타입에 적은애임
    //     acc[key] = '';  //5 =>  이값을 {} 여기에 넣을거임   acc[키값]:'' ; key=currnetvalue 값임
    //     return acc;  //
    // },{}); //3 refs 를 리턴해서 받아올거라 {} 리턴타입에 이거 쓴거임
    // console.log(init2);

    //1.const init 부분 간결하게 바꾸기=>키값을 배열에 놓고 reduce()함수사용하면 코드 간결하게 작성가능 => useRef 적용된부분은 얘로 못함
    // const init = { //여기들어가는건 다 문자타입이다(input 이기때문에) 그래서'' 로 감싼거임
    //     'id':'',   // 얘의 id pw 부분이 name 이고 뒤에 빈값이 value 이다. 폼데이터에 넣고 변경이 일어날때마다 인풋의 벨류에 들어감
    //     'pw':'',
    //     'name':'','phone1':'',        
    //     'phone2':'','phone3':'',        
    //     'address':'', 'birth1':'',        
    //     'birth2':'','birth3':'',
    //     'job':'','gender':'',      
    //     'email':'','introduce':''       
    // }
    // const [formData,setFormData] = useState(init); 이거의 의미는
    // formdata = {
    //     birth1':'',
    //     'birth2':'',
    //     'birth3':'',
    //     'job':'',
    //     'man':'',
    //     'woman':'',
    //     'email':'',
    //     'introduce':''
    // } 이다


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
