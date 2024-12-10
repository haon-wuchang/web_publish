

// export default function AvatarBox(props) {
//     return(
//         <div className='box'> 
//             <img src={props.src} />
//             <p>{props.name}</p>
//             {props.new && <div className="new">new</div>}
//         </div>
//     );
// }

// 구조분해할당으로 받기 
export default function AvatarBox({src,name,isNew}) {
    return(
        <div className='box'> 
            <img src={src} />
            <p>{name}</p>
           {isNew && <span className="new">new</span>}
        </div>
    );
} 

//isNew 를 그냥 new 라고 적으면 오류가 뜬다
// 이유는 new는 Class 를 만들때쓰는 이름이라서 사용이 불가능하기때문이다