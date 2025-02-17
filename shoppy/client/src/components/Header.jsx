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
    const {cartCount,setCartCount, cartList, setCartList} = useContext(CartContext); 

    useEffect(()=>{
        if(isLoggedIn){
            const id = localStorage.getItem('user_id');
            axios 
                .post('http://localhost:9000/cart/count',{'id':id})
                .then(res =>{
                    // console.log('count',res.data.count);
                    setCartCount(res.data.count);

                })
                .catch(error => console.log(error));   
            
            axios 
            .post('http://localhost:9000/cart/items',{'id':id})
            .then(res =>{
                setCartList(res.data);
            })
            .catch(error => console.log(error));  

        }else{
            setCartCount(0);
        }
    },[isLoggedIn]);

    console.log('header-cartList',cartList); 
    console.log('header - count',cartCount);

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

