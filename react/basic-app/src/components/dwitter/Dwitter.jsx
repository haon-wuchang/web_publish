
//props 가 너무 많으면 구조분해할당은 적합하지않다
export default function Dwitter(props) {
    return(
        <div className="dwitter" key={props.id}>
            <div className="dwitter-image">
                <img src={props.img} alt='필릭스이미지'/>
            </div>
            <div className="title">
                <span>{props.name} </span>
                <span>{props.id} </span>
                <span>{props.date}</span>
            </div>
            <div className="content">{props.content}</div>            
        </div>
    );
}