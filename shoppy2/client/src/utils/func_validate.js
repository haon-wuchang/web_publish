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
export const validate = (refs,msgRefs) => {
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);

    for(let i = 0; i < refEntries.length; i++){
        const item = refEntries[i];
        const name = item[0];
        const ref = item[1];

        let msgItem, msgName,msgRef = null;

        if(i < refEntries.length -1) {
            msgItem = msgRefEntries[i];
            msgName = msgItem[0];
            msgRef = msgItem[1];
        }

        if(name==='emaildomain'){
            if(ref.current.value === 'default')
                alert('선택해');
                ref.current.focus();
                return false;
        } else{
            if(ref.current.value===''){
                msgRef.current.style.setProperty('color','red');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}

/////////아디 중복확인 함수 ///////////////////////////////////////////////////////
export const handleIdCheck = (idRef,pwdRef,idMsgRef,setIdCheckBtn) => {
    if(idRef.current.value===''){
        idMsgRef.current.style.setProperty('color','red');
        idRef.current.focus();
        return false;
    }else{
        let did ='test';
        if(idRef.current.value===did){
            alert('중복된 아디입니다');
            idRef.current.value='';
            idRef.current.focus();
            return false;
        }else{
            alert('good');
            setIdCheckBtn('중복화긴체크 굿');
            pwdRef.current.focus();
            return false;
        }
    }
}
/////////비번일치여부 함수 ///////////////////////////////////////////////////////
export const handlePassword = (pwdRef,cpwdRef,nameRef,pwdMsgRef,cpwdMsgRef) => {
    if(pwdRef.current.value===''){
        pwdMsgRef.current.style.setProperty('color','red');
        pwdRef.current.focus();
        return false;
    }else if(cpwdRef.current.value===''){
        cpwdMsgRef.current.style.setProperty('color','red');
        cpwdRef.current.focus();
        return false;
    }else {
        if(pwdRef.current.value === cpwdRef.current.value){
            alert('good');
            nameRef.current.focus();
        }else{
            alert('비번일치안함');
            pwdRef.current.value='';
            cpwdRef.current.value='';
            pwdRef.current.focus();
        }
    }
}