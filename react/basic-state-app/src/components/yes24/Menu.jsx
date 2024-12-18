
export default function Menu({name, href, bg, color,click,category}) {
    const handleClickMenu= () => {
        console.log(`Menu컴포넌트 ==> ${category}`);
        click(category);  
    }

    return (
        <a  href={href}
            className="menu-item"
            style={{backgroundColor: bg, color: color}}
            onClick={handleClickMenu}>{name}</a>        
    );
}