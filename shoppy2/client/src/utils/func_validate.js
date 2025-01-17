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
                msgItem.current.style.setProperty('color','red');
                ref.current.focus();
                return false;
            }
        }
    }
    return true;
}

