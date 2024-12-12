
export default function Book({img,title}) {
    return(
        <div>
            <img src={img}/>
            <div>{title}</div>
        </div>
    );
}