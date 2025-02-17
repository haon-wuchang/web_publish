import {createContext, useState, useEffect} from 'react'; 

export const cartContext = createContext();  //1. context 만들기

export const cartProvider = ({children}) => {  //2. provider 만들기( 이 값을 사용할 범위 설정 )
    //4-1.카트리스트 값 관리할 변수 선언
    const [cartList,setCartList] = useState([]);
    //4-2.카트카운트 값 관리할 변수 선언
    const [cartCount,setCartCount] = useState(0);
   
    return ( 
        // 3. return 할 값 만들기 ( cartContext 를 임포트한 애들이 이 값을 쓰는거임)
        <cartContext.Provider 
        value ={{cartList,setCartList , cartCount,setCartCount}}>  {/*4-3.얘네는 다른데서도써야대니까 넣어줌*/}
            {children}
        </cartContext.Provider>
    );
}

