import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { AuthContext } from "../auth/AuthContext.js"; // aa. 아까만든 컨텍스트 가져오기 ( 여기에잇는 values 값을 사용할거임)
import {useContext} from 'react'; // aa.
import {useNavigate} from 'react-router-dom'; //bb-3.

export default function Header({cartCount}) {
    // bb. AuthContext에 잇는 value 값을 가져와서 사용할거라 변수선언 (전역객체에서 가져오는게 useContext임)
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    // console.log('isLoggedIn===>',isLoggedIn);
    
    const navigate = useNavigate(); //bb-3.

    //bb-2. 이벤트함수 선언
    const handleLoginToggle = () => {
        if(isLoggedIn){  // 로그아웃 버튼 클릭되면 
            const select = window.confirm('ㄹㅇ 로그아웃할꺼?');
            if(select){
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                navigate('/');  //bb-3.
                // alert('로그아웃됨');
            }            
        } else {
            navigate('/login');  //bb-3.
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

                    {/* bb-1. 삼항연산자와 버튼에 이벤트처리
                        토큰잇으면 로그아웃 나오게 없으면 로그인으로ㅍ*/}                    
                    <button type='button' onClick={handleLoginToggle}>
                        {isLoggedIn ? 'Logout' : 'Login'}
                    </button>

                    <Link to = '/signup'>
                        <button type='button'>Signup</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

