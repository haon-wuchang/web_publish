import AvatarImage from "./AvatarImage.jsx";


export default function AvatarImageList({list}) {
    
    return(             // map의 콜백함수 { }쓰면 return 도 적어야댕 근데 한줄이면 소괄호로 묶고 {} return삭제가능
        <ul>          
            {list.map((item) => <li><AvatarImage img={item.img}/></li> )}
        </ul>
    );

}

// 첫번쨰로 가져오는 item 은     {'img': '/images/people1.webp'}, 이거임