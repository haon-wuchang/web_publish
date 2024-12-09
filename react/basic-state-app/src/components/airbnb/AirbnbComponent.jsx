

export default function AirbnbComponent(props) {
    return(
    <div className="container">
         <img src={props.img}/>
         <div className="description">
             <p className="p1">{props.p1}</p>
             <p className="p2">{props.p2}</p>
             <p className="p3">{props.p3}</p>
             <p className="p4">{props.p4} / 박</p>
         </div>
     </div>
    );
}
