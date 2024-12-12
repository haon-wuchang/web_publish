import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {
    const handleCart = () => {
        props.onClick(props.id); 
    }
    return (
        <div className="product-container">
            <div>
                <img src={props.img} />
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
                <span className="sprice">{props.price}</span>
                <span className="fprice">{props.salePrice}</span>
            </div>
            <div className="tags">
                {props.isSale && <span className="t1">세일</span>}
               {props.isTicket && <span className="t2">쿠폰</span>}
                {props.isDelivery && <span className="t3">오늘드림</span>}
            </div>
        </div>
    );
}

