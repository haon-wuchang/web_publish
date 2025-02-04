import axios from 'axios';


// 로그인폼 validate
export const validateLogin = ({idRef,pwdRef},{msgRef}) => {
    let result = true ;
    if(idRef.current.value === ''){
        msgRef.current.style.setProperty('color','red');
        idRef.current.focus();
        result = false ;
    }else if(pwdRef.current.value === ''){
        msgRef.current.style.setProperty('color','red');
        pwdRef.current.focus();
        result = false ;   
    }else {
        msgRef.current.style.setProperty('color','white');
    }
    return result; 
}

// 회원가입폼 validate | entries() 사용함 => entries 함수는 2차원배열로 값 출력함 
export const validateSignup = (refs,msgRefs) => {
    // console.log('refs',refs);
    // console.log('msgRefs',msgRefs);
    
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);
    // console.log(refEntries);  
    // console.log(msgRefEntries);

    //refEntries배열객체와 msgRefEntries배열객체의 index 를 동일하게 체크한다 !! => for 문 사용
    for(let i = 0; i<refEntries.length ; i++){
        const item = refEntries[i];  
        const name = item[0]; 
        const ref = item [1];   // 데이터 입력폼 객체 주소        

        let msgItem, msgName, msgRef = null; 

        if(i < refEntries.length -1 ){     
         msgItem = msgRefEntries[i];
         msgName = msgItem[0];
         msgRef = msgItem[1];  // 데이터 입력폼의 메세지 객체 주소
        }

        if(name !== 'emaildomainRef'){ 
            if(ref.current.value === ''){
                msgRef.current.style.setProperty('color','red');
                ref.current.focus();
                return false;
            } 
        }else{             
            if(ref.current.value === 'default'){
                alert('이메일주소 선택');
                ref.current.focus();
                return false;
            }        
        } 
    }
    return true;    
}


// 아디 중복체크 함수 /////////////////////////////////////////
// ㄱ. db 에 들어온 id 들과 중복체크 진행
    export const handleDuplicateIdCheck = (idRef,idMsgRef,pwdRef,setIdCheckResult) => { //!!!넘어오는객체를 변수로 받을때는 순서 중용 | 구조분해할당 아닐때는 넘어오는애들 순서맞춰야댕
        // refs.current['idRef'] = idRef 임
        if(idRef.current.value===''){
            idMsgRef.current.style.setProperty('color','red');
            idRef.current.focus();
            return false;
        }else {
            // ㄴ. 아디 중복체크 - 서버 연동
            axios.post('http://localhost:9000/member/idcheck',{"id":idRef.current.value})
                .then(res => {
                     if(res.data.result=== 1){ // ㅂ.if문으로 중복체크확인작업하기
                        alert('이 아디는 사용불가 다른거 써');
                        idRef.current.value='';
                        idRef.current.focus();
                        return false;
                    } else {
                        alert('good');
                        setIdCheckResult('ok');
                        pwdRef.current.focus();
                        return false;
                    }
                    console.log('idchekckck',res.data)
                })
                .catch(error => console.log(error));

            
        }
    }

// 비번 일치여부 확인 /////////////////////////////////
export const handlePassword = (pwdRef,cpwdRef,nameRef,pwdMsgRef,cpwdMsgRef) => {
    if(pwdRef.current.value===''){
        pwdMsgRef.current.style.setProperty('color','red');
        // alert('입력해');
        pwdRef.current.focus();
        return false;
    } else if(cpwdRef.current.value==='') {
        cpwdMsgRef.current.style.setProperty('color','red');
        // alert('입력해');
        cpwdRef.current.focus();
        return false;
    }else {
        if(pwdRef.current.value!==cpwdRef.current.value){   
            alert('비번일치 x');
            pwdRef.current.value = '';
            cpwdRef.current.value = '';
            pwdRef.current.focus();      
            return false;         
        } else if (pwdRef.current.value===cpwdRef.current.value) {
            alert('ok');
            nameRef.current.focus();
            return false;
        }
    }
 }