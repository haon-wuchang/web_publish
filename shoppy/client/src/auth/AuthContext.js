import {createContext, useState, useEffect} from 'react'; 
// 토큰값 체크 = useState()

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    //e. 로그인 인증작업
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    //( 그러면 로그인버튼을 로그인으로 두고 트루면 로그인버튼을 로그아웃으로 나오게하는거)

    // 토큰이 있으면 로그인 상태 유지
        //  토큰 가지러 브라우저에 나갓다 오니까 useEffect 사용해줘야한다
    useEffect(()=>{
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);  
        // !! = 이중부정 그럼 token 이 ture 라는건가? 그럼걍 token만 넣어주면 안되는거?
    },[]);
   
    return (
        <AuthContext.Provider value ={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
}
// f. 이제 헤더에 로그인버튼이 잇으니까 가서 바꿔주기