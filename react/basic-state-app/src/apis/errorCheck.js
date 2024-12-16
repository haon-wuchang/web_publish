/********************* 
SignUp 에러 체크 
************************/
export const errorCheckSignup = (name,value,error,setError) => {
    if(name==='id'){
        (value ==='') ? setError({...error, ['id']:'빈칸입력해'}): setError({...error,['id']:''});
    } else if(name==='pw'){
        (value ==='') ? setError({...error, ['pw']:'빈칸입력해'}): setError({...error,['pw']:''});
    } else if(name==='pwcheck'){
        (value ==='') ? setError({...error, ['pwcheck']:'빈칸입력해'}): setError({...error,['pwcheck']:''});
    } else if(name==='name'){
        (value ==='') ? setError({...error, ['name']:'빈칸입력해'}): setError({...error,['name']:''});
    } else if(name==='phonenumber'){
        (value ==='') ? setError({...error, ['phonenumber']:'빈칸입력해'}): setError({...error,['phonenumber']:''});
    } else if(name==='emailname'){
        (value ==='') ? setError({...error, ['emailname']:'빈칸입력해'}): setError({...error,['emailname']:''});
    }

}