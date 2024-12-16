/********************* 
CgvLoginForm 유효성체크 
************************/

export const validate = (param) => { 
    if(param.refs.idRef.current.value===''){ 
        param.setError({...param.error, ['id']:'아디입력해'});
        param.refs.idRef.current.focus();
        return false;
    } else if(param.refs.pwRef.current.value===''){
        param.setError({...param.error, ['pw']:'비번입력해'});
        param.refs.pwRef.current.focus();
        return false;
    }else{
        return true;
    }
}
/********************* 
Login2 유효성체크 
************************/
export const validateLogin2 = (param) => {
    if(param.idRef.current.value===''){
        param.setErrorMsg({...param.errorMsg, ['id']:'아디입력해'}); 
        param.idRef.current.focus();
        return false;  
    }else if(param.passwordRef.current.value===''){
        param.setErrorMsg({...param.errorMsg, ['password']:'비번입력해'}); 
        param.passwordRef.current.focus();
        return false;
    } else {
        return true;
    }
}

/********************* 
UserInfo 유효성체크 
************************/
export const validateUserInfo = (param) => {  
    if(param.nameRef.current.value===''){
        alert('이름을 입력해주세요');
        param.nameRef.current.focus();
        return false;
    } else if(param.addressRef.current.value===''){
        alert('주소를 입력해주세요');
        param.addressRef.current.focus();
        return false;
    }else if(param.ageRef.current.value===''){
        alert('나이를 입력해 주세요');
        param.ageRef.current.focus();
        return false;
    }else{
        return true;
    }
}



/********************* 
SignUp 유효성체크 
************************/


export const validateSignUp = (param) => {
    let result = true;
    if(param.refs.idRef.current.value==''){
        param.setError({...param.error, ['id']:'빈칸입력해'})
        // param.refs.idRef.current.style.setProperty('color','blue');
        param.refs.idRef.current.focus();
        result = false;
    } else if(param.refs.pwRef.current.value===''){
        param.setError({...param.error, ['pw']:'빈칸입력해'})
        param.refs.pwRef.current.focus();
        result = false;
    }else if(param.refs.pwcheckRef.current.value===''){
        param.setError({...param.error, ['pwcheck']:'빈칸입력해'})
        param.refs.pwcheckRef.current.focus();
        result = false;
    }else if(param.refs.nameRef.current.value===''){
        param.setError({...param.error, ['name']:'빈칸입력해'})
        param.refs.nameRef.current.focus();
        result = false;
    }else if(param.refs.phonenumberRef.current.value===''){
        param.setError({...param.error, ['phonenumber']:'빈칸입력해'})
        param.refs.phonenumberRef.current.focus();
        result = false;
    }else if(param.refs.emailnameRef.current.value===''){
        param.setError({...param.error, ['emailname']:'빈칸입력해'})
        param.refs.emailnameRef.current.focus();
        result = false;
    }   
    else if(param.refs.emaildomainRef.current.value==='default'){
        param.setError({...param.error, ['emaildomain']:'선택해'})
        param.refs.emaildomainRef.current.focus();
        result = false;
    } return result;
}


//TestJoin 
export const validateTest = (ref,error,setError) => {
    if(ref.idRef.current.value===''){
        setError({...error, ['id']:'아디 입력해'})
        ref.idRef.current.focus();
        return false;
    } else  if(ref.pwRef.current.value===''){
        setError({...error, ['pw']:'비번 입력해'})
        ref.pwRef.current.focus();
        return false;
    }else  if(ref.pwcheckRef.current.value===''){
        setError({...error, ['pwcheck']:'비번확인 입력해'})
        ref.pwcheckRef.current.focus();
        return false;
    }else  if(ref.nameRef.current.value===''){
        setError({...error, ['name']:'이름 입력해'})
        ref.nameRef.current.focus();
        return false;
    }else  if(ref.phonenumberRef.current.value===''){
        setError({...error, ['phonenumber']:'폰 입력해'})
        ref.phonenumberRef.current.focus();
        return false;
    }else  if(ref.emailnameRef.current.value===''){
        setError({...error, ['emailname']:'이메일 입력해'})
        ref.emailnameRef.current.focus();
        return false;
    }
}