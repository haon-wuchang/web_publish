import Logo from "./Logo.jsx";
import HeaderTopImage from "./HeaderTopImage.jsx";

export default function HeaderTop() {
    return(
        <div className="header-top">
            <Logo 
                href='#' 
                src="/images/cgvlogo.png"   //로고이미지 안뜸
                target='_self' 
                text='DEEP DIVE SPACE' 
                alt='cgv 로고'
            />
            <HeaderTopImage
                src='/images/hyundaicard.png'
                alt='현대카드이미지'
            />
        </div>
    );

}