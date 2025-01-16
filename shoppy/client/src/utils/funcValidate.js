// 로그인폼 validate
export const validateLogin = ({idRef,pwdRef}) => {
    let result = true ;
    if(idRef.current.value === ''){
        alert('아디입력해');
        idRef.current.focus();
        result = false ;
    }else if(pwdRef.current.value === ''){
        alert('비번입력해');
        pwdRef.current.focus();
        result = false ;   
    }
    return result; 
}

// 회원가입폼 validate
export const validateSignup = ({idRef,pwdRef,cpwdRef,nameRef,phoneRef,emailnameRef,emaildomainRef}) => {
    let result= true;
    if(idRef.current.value===''){
        alert('아디입력해');
        idRef.current.focus();
        result = false;
    }else if(pwdRef.current.value===''){
        alert('비번입력해');
        pwdRef.current.focus();
        result = false;
    }else if(cpwdRef.current.value===''){
        alert('비번확인입력해');
        cpwdRef.current.focus();
        result = false;
    }else if(nameRef.current.value===''){
        alert('이름입력해');
        nameRef.current.focus();
        result = false;
    }else if(phoneRef.current.value===''){
        alert('폰번호입력해');
        phoneRef.current.focus();
        result = false;
    }else if(emailnameRef.current.value===''){
        alert('이메일입력해');
        emailnameRef.current.focus();
        result = false;
    }else if(emaildomainRef.current.value==='default'){
        alert('이메일주소선택');
        emaildomainRef.current.focus();
        result = false;
    }
    return result;
}