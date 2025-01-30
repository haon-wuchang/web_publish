import React from 'react';
import HomeSwiper1 from '../components/homes/HomeSwiper1.jsx';
import HomeSwiper2 from '../components/homes/HomeSwiper2.jsx';
import HomeBrandsSwiper from '../components/homes/HomeBrandsSwiper.jsx';
import HomeEvent from '../components/homes/HomeEvent.jsx';
import HomeOuter6 from '../components/homes/HomeOuter6.jsx';
import HomeLank from '../components/homes/HomeLank.jsx';
import HomeNotableBrands from '../components/homes/HomeNotableBrands.jsx';
import HomeBrandsIssue from '../components/homes/HomeBrandsIssue.jsx';

export default function Home() {
    return (
        <>
            <HomeSwiper1 /> 
            <HomeSwiper2 /> 
            <HomeBrandsSwiper />  
            <HomeEvent /> 
            <HomeOuter6 /> 
            <HomeLank />
            <HomeNotableBrands />
            <HomeBrandsIssue />
        </>
    );
}

// 홈 맨위의 스와이퍼 빼고 나머지 들은 무한넘기기 불가능 마지막페이지에서 1페이지로 못감