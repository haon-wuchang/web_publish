
// export default function Avatar(props) {
//     return(
//         <div>
//             <img src={props.img}/>    
//             <div>{props.name}</div>              
//         </div>

//     );

// }

export default function Avatar({img,name}) {
    return(
        <div>
            <img src={img}/>    
            <div>{name}</div>              
        </div>

    );

}
