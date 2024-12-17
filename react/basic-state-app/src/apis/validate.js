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
        param.setError({...param.error, ['id']:'아이디를 입력해'})
        param.refs.idRef.current.focus();
        result = false;
    } else if(param.refs.pwRef.current.value===''){
        param.setError({...param.error, ['pw']:'비밀번호를 입력해'})
        param.refs.pwRef.current.focus();
        result = false;
    }else if(param.refs.pwcheckRef.current.value===''){
        param.setError({...param.error, ['pwcheck']:'비밀번호확인을 입력해'})
        param.refs.pwcheckRef.current.focus();
        result = false;
    }else if(param.refs.nameRef.current.value===''){
        param.setError({...param.error, ['name']:'이름을 입력해'})
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
    }else if(param.refs.emaildomainRef.current.value==='default'){
        param.setError({...param.error, ['emaildomain']:'선택해'})
        param.refs.emaildomainRef.current.focus();
        result = false;
    } return result;
}


//TestJoin 
export const valitest = () => {
    const entri = Object.entries();
    console.log(entri);
    
}

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

/********************* 
SignUp2 유효성체크   
************************/

export const validateSignup2 = (refs) => {
    const refEntries = Object.entries(refs);
    // // console.log(refEntries);
    // 콘솔로그를 찍으면
    // 0: ['idRef', {...}]   //entries 는 배열로 key.value 값이 나오는것같다다
    // 1: ['pwRef', {...}]
    // 2: ['nameRef', {...}]
    
    
    const msgs = {'idRef':'아이디','pwRef':'비밀번호','nameRef':'이름',
        'phone1Ref':'전화번호','phone2Ref':'전화번호','phone3Ref':'전화번호',
        'addressRef':'주소','birth1Ref':'생년월일','birth2Ref':'생년월일',
        'birth3Ref':'생년월일','emailRef':'이메일','introduce':'자기소개'
    };  
    
    for(const item of refEntries) {  //refEntries의 값이 item 에 들어가게된다.
        const name = item[0]; //이게 'idRef'값 이고고
        const ref = item[1]; //이게 {...} value 값 아닌가? 
        if(ref && ref.current.value === '') {  //얘는 인풋의 value 값이 빈값이면
            alert(`${msgs[name]} 을/를 입력해주세요`);  //💦 여기 [name] 은 왜들어간거지 
            //msgs의 '아이디' 여기 부분이 출력되게 해야하자나 근데 왜 [name]item[0] 이 들어가?
            // item[1] 이 들어가야 하는거 아니야? 여기 모르겟어 
            ref.current.focus();
            return false;
        }
    }
    // jobRef 라는 키값을 가지고 있을때는 value=default 니까 따로 설정해줘야함-이건아직안배윰..


    // let result = true;
    // if(refs.idRef.current.value===''){
    //     alert('아이디를 입력해주세요');
    //     refs.idRef.current.focus();
    //     result = false;
    // }else  if(refs.pwRef.current.value===''){
    //     alert('비밀번호를 입력해주세요');
    //     refs.pwRef.current.focus();
    //     result = false;
    // }else  if(refs.nameRef.current.value===''){
    //     alert('이름을 입력해주세요');
    //     refs.nameRef.current.focus();
    //     result = false;
    // }else  if(refs.phone1Ref.current.value===''){
    //     alert('전화번호를 입력해주세요');
    //     refs.phone1Ref.current.focus();
    //     result = false;
    // }
}


/************************************
SignUp 아이디 중복 체크  
****************************************/

export const handleIdCheck = (refs,errorCheckSignup,error,setError,idMsgRef) => {  //추가
        const idV = refs.idRef.current;
        if(idV.value===''){
            errorCheckSignup('id',idV.value,error,setError);            
        }else {
            const did = 'test';
            if(idV.value===did){
                setError({...error,['id']:'사용중인 아이디입니다'});
                idV.focus();
            }else{
                setError({...error,['id']:'사용가능한 아이디입니다'});
                idMsgRef.current.style.setProperty('color','blue');
            }
        }
    }

/************************************
SignUp 비밀번호 일치 체크  
****************************************/
export const handlePasswordCheck = (refs,errorCheckSignup,error,setError,pwMsgRef,setFormData,formData) => { //추가
        const pwV =refs.pwRef.current;
        const pwcV = refs.pwcheckRef.current;
        if(pwV.value===''){
            errorCheckSignup('pw',pwV.value,error,setError);
            pwV.focus();
        } else if(pwcV.value===''){
            errorCheckSignup('pwcheck',pwcV.value,error,setError);
            pwcV.focus();
        }else{
            if(pwV.value===pwcV.value){
                setError({...error, ['pw']:'비밀번호가 일치합니다'});
                pwMsgRef.current.style.setProperty('color','blue');
            }else{
                setError({...error, ['pw']:'비밀번호가 일치하지않습니다'});
                //화면관리는 formData가 하니까 formData를 지워야함
                setFormData({...formData,['pw']:'',['pwcheck']:''});
                refs.pwcheckRef.current.focus();
            }
        }
    }

