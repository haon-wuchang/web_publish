

export default function AirbnbComponent(props) {
    return(
    <div className="container">
        <div className="img">
            <img src={props.img}/>
            {props.good && <span className="good">게스트 선호</span>} 
            <span className="heart" style={{color:props.color}}>♡</span>
        </div>
         <div className="description">
             <p className="p1">{props.p1}</p>
             <p className="p2">{props.p2}</p>
             <p className="p3">{props.p3}</p>
             <p className="p4">{props.p4} / 박</p>
         </div>
     </div>
    );
} //good의 값이 true일때만 출력
