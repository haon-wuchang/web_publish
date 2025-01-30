import React from 'react';

export default function Signup() {

    const list = [
            아디, 비번, 비번첵, 이름 ,폰, 이메일 
    ]

    return (
        <div className='얘 맵돌리기 '>
            <span>아이디</span>
            <input type="text" />
        </div>
    );
}

비번,첵 부분만 type= password 로 하고 

이메일부분은 클릭하면 밑에 옵션창이 뜸
그래서 이메일 앞부분만 입력하면 @naver.com 이부분은 옵션창에서 선택하면됨