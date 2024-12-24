
export default function HeaderTopMenu({href, src, name}) {
    return(
        <a href={href} 
            target='_parent' className="header-menu-icon1">
            <img src={src} alt='' />
            <span>&nbsp;{name}</span>
        </a>
    );
}