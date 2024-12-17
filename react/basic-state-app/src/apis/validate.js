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

/********************* 
SignUp2 유효성체크   
************************/

export const validateSignup2 = (refs) => {
    const refEntries = Object.entries(refs);
    // console.log(refEntries); // 0: [idRef, {}]  키 벨류 둘다 가져오게 찍힘
    
    const msgs = {'idRef':'아이디','pwRef':'비밀번호','nameRef':'이름',
        'phone1Ref':'전화번호','phone2Ref':'전화번호','phone3Ref':'전화번호',
        'addressRef':'주소','birth1Ref':'생년월일','birth2Ref':'생년월일',
        'birth3Ref':'생년월일','emailRef':'이메일','introduce':'자기소개'
    };  //근데 이건 왜 만든거임?
    
    //💥 배열객체.map() or 배열.forEach() 함수 는 
    // 배열객체를 순회하는것이 목적이므로 if 체크 후 focus 가 적용되지 않는다
    //근데 for 문은 해당로직의 내용까지 전부를 처음부터 끝까지 한번 진행하고
    //  그다음것을 순회 하게 된다. 따라서 for 문으로 돌리면 focus 가 적용되게 된다💥
    
    for(const item of refEntries) {
        const name = item[0];
        const ref = item[1];
        if(ref && ref.current.value === '') {
            alert(`${msgs[name]} 을/를 입력해주세요`);
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
    // }else  if(refs.phone2Ref.current.value===''){
    //     alert('전화번호를 입력해주세요');
    //     refs.phone2Ref.current.focus();
    //     result = false;
    // }else  if(refs.phone3Ref.current.value===''){
    //     alert('전화번호를 입력해주세요');
    //     refs.phone3Ref.current.focus();
    //     result = false;
    // }else  if(refs.addressRef.current.value===''){
    //     alert('주소를 입력해주세요');
    //     refs.addressRef.current.focus();
    //     result = false;
    // }else  if(refs.birth1Ref.current.value===''){
    //     alert('생년월일을 입력해주세요');
    //     refs.birth1Ref.current.focus();
    //     result = false;
    // }else  if(refs.birth2Ref.current.value===''){
    //     alert('생년월일을 입력해주세요');
    //     refs.birth2Ref.current.focus();
    //     result = false;
    // }else  if(refs.birth3Ref.current.value===''){
    //     alert('생년월일을 입력해주세요');
    //     refs.birth3Ref.current.focus();
    //     result = false;
    // }else  if(refs.jobRef.current.value==='default'){
    //     alert('직업을 선택해주세요');
    //     refs.jobRef.current.focus();
    //     result = false;
    // }else  if(refs.genderRef.current.value===''){
    //     alert('성별을 선택해주세요');            
    //     refs.genderRef.current.focus();
    //     result = false;
    // }else  if(refs.emailRef.current.value===''){
    //     alert('이메일을 입력해주세요');
    //     refs.emailRef.current.focus();
    //     result = false;
    // }else  if(refs.introduceRef.current.value===''){
    //     alert('자기소개를 입력해주세요');
    //     refs.introduceRef.current.focus();
    //     result = false;
    // } return result;
}


