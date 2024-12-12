
export default function Product({img,title}) {
    return(
        <div>
            <img src={img}/>
            <div>{title}</div>
        </div>
    );
}