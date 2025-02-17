import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from "../auth/AuthContext.js"; 
import {useContext, useEffect} from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import { CartContext } from '../context/cartContext.js';
import axios from 'axios';

export default function Header() {
    const navigate = useNavigate(); 
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    const {cartCount,setCartCount} = useContext(CartContext); 
    //1. 로그아웃햇을때는 마이카트 숫자를 0 으로 만들고 로그인상태면 기존에 내가 추가했던 수량만큼 뜨게하고싶다
    // => useEffect 사용(isLoggedIn 값이 바뀔때마다 useEffect 안에 함수를 다시실행함) , 로그인상태에 따라 cartCount 값 변경 
    useEffect(()=>{
        if(isLoggedIn){
            //1-1. db 연동해서 해당id의 갯수 가져오기
            const id = localStorage.getItem('user_id');
            axios 
                .post('http://localhost:9000/cart/count',{'id':id})
                .then(res =>{
                    //1-3. count 잘 가져오는지 확인후 setCartCount 에 넣어주기 
                    console.log('count',res.data.count);
                    setCartCount(res.data.count);

                })
                .catch(error => console.log(error));    
        }else{
            setCartCount(0);
        }
    },[isLoggedIn]);
    

    const handleLoginToggle = () => {
        if(isLoggedIn){ 
            const select = window.confirm('ㄹㅇ 로그아웃할꺼?');
            if(select){
                localStorage.removeItem('token');
                localStorage.removeItem('user_id'); 
                setIsLoggedIn(false);
                navigate('/'); 
            }            
        } else {
            navigate('/login');  
        }
    }
    

    return (
        <div className='header-outer'>
            <div className='header'> 
                <Link to='/' className='header-left'>
                    <FiShoppingBag />
                    <span>shoppy logo</span>
                </Link>
                <nav className='header-right'>
                    <Link to ='/all'>Products</Link>
                    <Link to ='/cart'>MyCart({cartCount})</Link>               
                    <button type='button' onClick={handleLoginToggle}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>
                    <Link to = '/signup'>
                        <button type='button'>Signup</button>
                    </Link>
                    {isLoggedIn && 
                        <Link to = '/products/new'>
                            <button type='button'>New Product</button>
                        </Link>                    
                    }
                </nav>
            </div>
        </div>
    );
}

