import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {
    const handleCart = () => {
        props.onClick(props.id); //=> 11.프로덕트리스트 컴포넌트의 토탈카트함수를 호출한다 /=> 프로턱트리스트를 호출하는거난 앱올리브이다.
    }
//1. 장바구니아이콘에 온클릭 선언 후, 온클릭에서 실행될 함수를 정의, 그후 각각의상품을 id 를 통해서 구분한다(ex 메디힐 상품을 누르면 메디힐만 장바구니에 들어가야대니까 구분해놔야지)
    return (
        <div className="product-container">
            <div className="img-div">
                <img src={props.img} className="body-img"/>
                <FontAwesomeIcon 
                    icon={faCartShopping} 
                    onClick={handleCart}
                    className='cart'/>
            </div>
            <p className="title">{props.title}</p>
            <div className="description">
                {props.introduct}
            </div>
            <div className="price">
                <span className="original-price">{props.price}</span>
                <span className="sale-price">{props.salePrice}</span>
            </div>
            <div className="tags">
                {props.isSale && <span className="tags-sale">세일</span>}
               {props.isTicket && <span className="tags-ticket">쿠폰</span>}
                {props.isDelivery && <span className="tags-delivery">오늘드림</span>}
            </div>
        </div>
    );
}

