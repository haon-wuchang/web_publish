// shoppy2 login validate form
export const validateLogin = ({idRef,pwdRef}) => {  // refs가 통채로 넘어왓으니까 여기서는 구조분해할당으로 받음
    let result = true;
    if(idRef.current.value === ''){
        alert('id 입력해');
        idRef.current.focus();
        result = false;
    }else if(pwdRef.current.value === ''){
        alert('비번입력');
        pwdRef.current.focus();
        result = false;
    }
    return result;
}   