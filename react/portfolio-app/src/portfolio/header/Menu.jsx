import React from 'react';

export default function Menu({href,menuName,style,click}) {

    return (
            <a href={href} 
                className={style} 
                onClick={()=>{click(menuName)}}>{menuName}</a>
    );
}

// 이벤트, 발생할떄마다누가클릭되는지 관리useState , 해당 css 값을 넘겨준다
//css className을 부모가 자식한테 줘야댄댕
//각각의 메뉴들을 구분하는 id 같은게 잇어야한당
//프롭스로 class 는 쓰지마