import React, { useRef, useState } from 'react';

export default function UserInfo() {
    const nameRef = useRef(null);//
    const addressRef = useRef(null);//
    const ageRef = useRef(null);//

    const initform = {'name' :'','address':'','age':''}; 
    const [form,setForm] = useState(initform); 

    const handleChange = (event) => {
        const {name,value}= event.target; 
        setForm({...form,[name]:value});
    }
    
    const validate = () => {  //
        if(nameRef.current.value===''){
            alert('빈칸금지');
            nameRef.current.focus();
            return false;
        } else if(addressRef.current.value===''){
            alert('빈칸금지');
            addressRef.current.focus();
            return false;
        }else if(ageRef.current.value===''){
            alert('빈칸금지');
            ageRef.current.focus();
            return false;
        }else{
            return true;
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();   
        if(validate()) console.log(form);//
    }
    return (
        <div>
            <h1>유저 정보</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="">이름</label>
                        <input type="text" name='name' value={form.name} 
                            onChange={handleChange} ref={nameRef}/>
                    </li>
                    <li>
                        <label htmlFor="">주소</label>
                        <input type="text" name='address' value={form.address} 
                            onChange={handleChange} ref={addressRef}/>
                    </li>
                    <li>
                        <label htmlFor="">나이</label>
                        <input type="text" name='age' value={form.age} 
                            onChange={handleChange} ref={ageRef}/>
                    </li>
                    <li>
                        <button type='submit'>전송</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


