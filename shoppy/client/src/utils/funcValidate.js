// 로그인폼 validate
export const validateLogin = (idRef,pwdRef) => {
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
