
export default function Menu({text,count}) {
    return (

        <button type='button' className="header-menu-btn">{text}
        {text && text==='장바구니'?<span>({count})</span>:''}   
        </button>  
    );
}

