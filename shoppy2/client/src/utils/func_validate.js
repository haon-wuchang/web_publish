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


// shoppy2 signup validate form
export const validate = (refs) => {
    let result = true;
    if(refs.idRef.current.value === ''){
        alert('아이디 입력');
        refs.idRef.current.focus();
        result = false;
    }else if(refs.pwdRef.current.value === ''){
        alert('비번 입력');
        refs.pwdRef.current.focus();
        result = false;
    }else if(refs.cpwdRef.current.value === ''){
        alert('비번 입력');
        refs.cpwdRef.current.focus();
        result = false;
    }else if(refs.nameRef.current.value === ''){
        alert('이름 입력');
        refs.nameRef.current.focus();
        result = false;
    }else if(refs.phoneRef.current.value === ''){
        alert('폰 입력');
        refs.phoneRef.current.focus();
        result = false;
    }else if(refs.emailnameRef.current.value === ''){
        alert('이메일 입력');
        refs.emailnameRef.current.focus();
        result = false;
    }else if(refs.emaildomainRef.current.value === ''){
        alert('이메일도매인 선택');
        refs.emaildomainRef.current.focus();
        result = false;
    }
}