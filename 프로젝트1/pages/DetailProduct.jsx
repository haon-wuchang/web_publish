import React from 'react';
import Information from '../components/detailProducts/Information.jsx';
import Size from '../components/detailProducts/Size.jsx';
import Review from '../components/detailProducts/Review.jsx';
import Recommend from '../components/detailProducts/Recommend.jsx';
import Product from '../commons/Product.jsx';

export default function DetailProduct() {
    return (
        <div>
        Product.jsx 에 있는 상세이미지 리스트, 색상리스트, 배송방법 등 필요한 내용 가져오기 

            <Information />
            <Size />
            <Review />
            <Recommend />
        </div>
    );
}

