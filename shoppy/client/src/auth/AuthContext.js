import {createContext, useState, useEffect} from 'react'; 
// 토큰값 체크 = useState()

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // 로그인 인증작업
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    // 토큰이 있으면 로그인 상태 유지
    useEffect(()=>{
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);  
    },[]);
   
    return (
        <AuthContext.Provider value ={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
}
