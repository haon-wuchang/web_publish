/********************* 
CgvLoginForm 유효성체크 
************************/
// export const validate = (idRef,pwRef,error,setError) => { //2💥얘는 함수니까 프롭스로 받으면안되고 파라미터로 받는거야
//     if(idRef.current.value===''){
//         setError({...error, ['id']:'아디입력해'});
//         idRef.current.focus();
//         return false;
//     } else if(pwRef.current.value===''){
//         setError({...error, ['pw']:'비번입력해'});
//         pwRef.current.focus();
//         return false;
//     }else{
//         return true;
//     }
// } / /3 자바스크립트에서 객체를 여려개 보낼떄는 {} 오브젝트 리터럴형태로 만들어서 넘기면 된다
export const validate = (param) => {  // 5
    if(param.refs.idRef.current.value===''){ //44
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

