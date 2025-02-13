import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from "../auth/AuthContext.js"; 
import {useContext} from 'react'; 
import {useNavigate} from 'react-router-dom'; 

export default function Header({cartCount}) {
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    
    const navigate = useNavigate(); 

    const handleLoginToggle = () => {
        if(isLoggedIn){ 
            const select = window.confirm('ㄹㅇ 로그아웃할꺼?');
            if(select){
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');  // a.  로그아웃 눌렀을때 토큰,유저아이디가 로컬스토리지에서 지워지는지 확인하기
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

