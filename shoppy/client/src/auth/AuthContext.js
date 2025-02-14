import {createContext, useState, useEffect} from 'react'; 
// 토큰값 체크 = useState()

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // 로그인 인증작업
    const [isLoggedIn,setIsLoggedIn] = useState(()=>{
        try {
            const tokens = localStorage.getItem('token');
            return tokens ? true : false; 
          } catch (error) {
            console.error('로컬스토리지 json 데이터 파싱에러',error);
            return false;  
          }   
    });

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
