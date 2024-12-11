import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Product(props) {
    const handleCart = () => {
        props.onClick(props.id); 
    }
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

