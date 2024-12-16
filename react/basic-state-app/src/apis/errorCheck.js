/********************* 
SignUp 에러 체크 
************************/    
export const errorCheckSignup = (name,value,error,setError) => {
    const names = [
        {"name":"id", "msg":"아디를 입력해주세요"},
        {"name":"pw", "msg":"비번을 입력해주세요"},
        {"name":"pwcheck", "msg":"비번확인을 입력해주세요"},
        {"name":"name", "msg":"이름을 입력해주세요"},
        {"name":"phonenumber", "msg":"전번을 입력해주세요"},
        {"name":"emailname", "msg":"이메일을 입력해주세요"}
        ];

    names.map((item)=>
        (item.name === name) ? (
            (value ==='') ? setError({...error, [item.name]:item.msg}): setError({...error,[item.name]:''})
            ): ''
        );
   
}

/********************* 
CgvLoginForm 에러 체크 
************************/  
export const errorCheckCgvLoginForm = (name,value,error,setError) => {
    const data = [
        {"name":"id", "msg": "아이디를 입력해주세요"},
        {"name":"pw", "msg": "비밀번호를 입력해주세요"}
    ];

    data.map((item)=>
        (item.name===name) ? (
            (value==='') ? setError({...error, [item.name]:item.msg}): setError({...error,[item.name]:''})
        ): ''
    );
}

//TestJoin 
  // if(name==='id'){
        //     (value==='') ? setError({...error, ['id']:'이름 입력해'}):
        //      setError({...error, ['id']:''});
        // } else  if(name==='pw'){
        //     (value==='') ? setError({...error, ['pw']:'이름 입력해'}):
        //      setError({...error, ['pw']:''});
        // }
export const errorCheckTestJoin = (name,value,error,setError) => {
    const data = [
        {'name':'id','errorMsg':'아이디를 입력해주세요'},
        {'name':'pw','errorMsg':'비밀번호를 입력해주세요'},
        {'name':'pwcheck','errorMsg':'비밀번호확인을 입력해주세요'},
        {'name':'name','errorMsg':'이름을 입력해주세요'},
        {'name':'phonenumber','errorMsg':'전번을 입력해주세요'},
        {'name':'emailname','errorMsg':'이메일을 입력해주세요'},
    ];
    data.map((item)=>
        (item.name === name) ? (
            (value==='') ? setError({...error, [item.name]:item.value}):setError({...error,[item.name]:''})
        ): ''
    )
}




