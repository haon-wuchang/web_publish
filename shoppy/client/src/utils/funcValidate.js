// 로그인폼 validate
export const validateLogin = ({idRef,pwdRef},{msgRef}) => {
    let result = true ;
    if(idRef.current.value === ''){
        msgRef.current.style.setProperty('color','red');
        idRef.current.focus();
        result = false ;
    }else if(pwdRef.current.value === ''){
        msgRef.current.style.setProperty('color','red');
        pwdRef.current.focus();
        result = false ;   
    }else {
        msgRef.current.style.setProperty('color','white');
    }
    return result; 
}

// 회원가입폼 validate | entries() 사용함 => entries 함수는 2차원배열로 값 출력함 
export const validateSignup = (refs,msgRefs) => {

    // console.log('refs',refs);
    // console.log('msgRefs',msgRefs);
    
    const refEntries = Object.entries(refs.current);
    const msgRefEntries = Object.entries(msgRefs.current);
    // console.log(refEntries);  
    // console.log(msgRefEntries);

    //refEntries배열객체와 msgRefEntries배열객체의 index 를 동일하게 체크한다 !! => for 문 사용
        // 배열객체 하나일때는 for of 써도됨
    for(let i = 0; i<refEntries.length ; i++){
        //i번지에 해당하는 배열가져오려고 const item 변수 선언
        const item = refEntries[i];  
        // item 이 배열 이니까 item 1 의 index 0번지는 idRef 이고 1번지는 { ..} 임
        const name = item[0]; 
        const ref = item [1];   // 데이터 입력폼 객체 주소
        

        // 배열 객체2개가있는데 둘이 서로 갯수가 안맞을떄는 이렇게 해야댕 나는 ref 는 7개고 msgRef 는6개라서 이렇게 줘야함  |
        //  이렇게 안하고 걍 signup 가서 갯수 동일하게 맞춰주면 됨
        let msgItem, msgName, msgRef = null;  //const 로 하면 재선언 불가니까 let 으로한거임

        if(i < refEntries.length -1 ){     
         msgItem = msgRefEntries[i];
         msgName = msgItem[0];
         msgRef = msgItem[1];  // 데이터 입력폼의 메세지 객체 주소
        }

        if(name !== 'emaildomainRef'){ //셀렉트박스빼고 나머지애들은 다 입력폼이니까 빈값이면 빨간글씨 뜨게 할거임
            if(ref.current.value === ''){
                msgRef.current.style.setProperty('color','red');
                ref.current.focus();
                return false;
            }
        }else{  // emaildomain 은 default 로 체크하니까 얘는 제외하고            
            if(ref.current.value === 'default'){
                alert('이메일주소 선택');
                ref.current.focus();
                return false;
            }        
        } 
    }
    return true;    
}

    // for 문 안에서는 바로바로 return 해줘야함

    // const refEntries = [
    // [idRef:{...}],   => 이 안쪽에 잇는 배열이 item 이고 name 은 item의0 번지니까 idRef임
    // [pwdRef:{...}],      => item 1번지는 {...}임
    //  ]











    
    // alert('ㅁㅁ를 입력해주세요');  이 ㅁㅁ 부분만 다 변경하면 되니까 아이디,비번,이름,주소 등
    // 그래서 이 ㅁㅁ 값을 저장하는 {} 
