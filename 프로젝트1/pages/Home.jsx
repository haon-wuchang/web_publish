import React from 'react';
import HomeSwiper1 from '../components/homes/HomeSwiper1.jsx';
import HomeSwiper2 from '../components/homes/HomeSwiper2.jsx';
import HomeBrandsSwiper from '../components/homes/HomeBrandsSwiper.jsx';
import HomeEvent from '../components/homes/HomeEvent.jsx';
import HomeOuter6 from '../components/homes/HomeOuter6.jsx';
import HomeSwiper1 from '../components/homes/HomeSwiper1.jsx';
import HomeSwiper1 from '../components/homes/HomeSwiper1.jsx';

export default function Home() {
    return (
        <>
            <HomeSwiper1 /> 스와이퍼10개 1개당 이미지3개씩  / 스와이퍼 무한으로 계속 옆으로 넘어감
            <HomeSwiper2 /> 스와이퍼2 이미지 리스트를 만들고  / 마지막 스와이퍼페이지에서 넘어가지않음 4페이지에서 1페이지로 x
            <HomeBrandsSwiper />  12개씩 있음 / 마지막 스와이퍼페이지에서 넘어가지않음 3페이지에서 1페이지로 x
            <HomeEvent /> 이벤트도 3개 이상 될 수 있으므로 컴포넌트로 만듬
            <HomeOuter6 /> {/*map 으로 상품컴포넌트 카테고리별 6개씩만 가져오게 하기 */}
            <HomeLank />
                {/*랭킹  - 카테고리별 8개씩 상품컴포넌트에서 가져오고 순위 보여주기 
                    - 랭킹 바로가기 클릭하면  실시간 클릭랭킹이라는 페이지로 넘어감*/}
            <HomeNotableBrands />
                {/* 주목할브랜드 - 한줄 컴포넌트 안에
                왼쪽 이미지들 리스트 만들고 오른쪽은 해당브랜드의 상품컴포넌트 10개씩 가져옴 */}
            <HomeBrandsIssue />
        </>
    );
}

공용사용
상품컴포넌트 = 메인페이지에서 3번 사용됨