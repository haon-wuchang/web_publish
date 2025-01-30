import React from 'react';

export default function HomeLank() {
    const names = [
        여자, 남자, 키즈, 럭셔리, 스포츠, 골프 등..
    ];

    return (
        <div>
            
            <Link to = '/lank'>
                <button>랭킹 바로가기</button>
            </Link>
        </div>
    );
}
// 랭킹페이지에 있는 상품 8개 가져오기 
