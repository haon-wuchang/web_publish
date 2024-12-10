

export default function AvatarBox(props) {
    return(
        <div className='box'> 
            <img src={props.src} />
            <p>{props.name}</p>
            {props.new && <div className="new">new</div>}
        </div>
    );
}

// 구조분해할당으로 받기 --안대는뎅
// export default function AvatarBox({src,name,new}) {
//     return(
//         <div className='box'> 
//             <img src={src} />
//             <p>{name}</p>
//            {new && <span className="new">new</span>}
//         </div>
//     );
// } 