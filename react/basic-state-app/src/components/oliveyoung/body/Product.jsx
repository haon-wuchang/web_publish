
export default function Product(props) {
    return (
        <div className="product-container">
            <div>
                <img src={props.img} className="body-img"/>
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
                <span className="tags-sale">세일</span>
                <span className="tags-ticket">쿠폰</span>
                <span className="tags-delivery">오늘드림</span>
            </div>
        </div>
    );
}

