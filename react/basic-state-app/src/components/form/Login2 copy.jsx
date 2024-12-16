import React, { useState,useRef } from 'react';

export default function Login2() {
    const initForm = {'id':'','password':''} //여기 id apssword 는 input의 name 과 맞춰서적는게좋다
    const [data,setData] = useState(initForm);
    //유효성체크
    const idRef = useRef(null);
    const passwordRef = useRef(null);

    const handleInput=(event)=>{
        const {name, value} = event.target;
        setData({...data, [name]:value}); //💥 ...data= 'id':'','password':'' 이게 들어감 {}이거까지 안들어간다! 
        // 💥setData가 { ~~ } 이거자나 그래서 [name]:value 가 여기{} 들어가는거니까
        //💥 오브젝트 리터럴에 들어가는 프로퍼티 [name] 이라서 대괄호에 넣은거임
    }
    const validate = () => {
        if(idRef.current.value===''){
            alert('아디입력해');
            idRef.current.focus();
            return false;  
        }else if(passwordRef.current.value===''){
            alert('비번입력해');
            passwordRef.current.focus();
            return false;
        } else {
            return true;
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate())console.log(data); 
    }


    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}> 
                <ul>
                    <li>
                        <label htmlFor="">아이디</label>
                        <input type="text" name='id' value={data.id}
                            onChange={handleInput} ref={idRef}/>
                        <span style={{'color':'red'}}></span>
                    </li>
                    <li>
                        <label htmlFor="">비밀번호</label>
                        <input type="password" name='password' value={data.password}
                            onChange={handleInput} ref={passwordRef}/>
                        <span style={{'color':'red'}}></span>
                    </li>
                    <button type='submit'>로그인</button>
                </ul>
            </form>
        </div>
    );
}

