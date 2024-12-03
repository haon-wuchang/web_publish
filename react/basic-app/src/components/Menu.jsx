import '../css/Menu.css';

export default function Menu({name,href,bg,color}) {
    return(
       <a href={href} className='menu-item' 
            style={{backgroundColor:bg, color:color}}>{name}</a>
    );
}

// react에서 style 넣을때는 style={{color : "red"}} 이렇게 넣어야함 ''이거는 안됨