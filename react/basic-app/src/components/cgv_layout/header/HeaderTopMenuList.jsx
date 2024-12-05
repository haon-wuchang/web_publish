import HeaderTopMenu from "./HeaderTopMenu.jsx"

export default function HeaderTopMenuList() {
    const list =[
        {
            'href' : '#' , 
            'src' : 'https://img.cgv.co.kr/R2014/images/common/ico/loginPassword.png' , 
            'name' : '로그인'
        },
        {
            'href' : '#' , 
            'src' : 'https://img.cgv.co.kr/R2014/images/common/ico/loginJoin.png' , 
            'name' : '회원가입'
        },
        {
            'href' : '#' , 
            'src' : 'https://img.cgv.co.kr/R2014/images/common/ico/loginMember.png' , 
            'name' : 'My CGV'
        },
        {
            'href' : '#' , 
            'src' : 'https://img.cgv.co.kr/R2014/images/common/ico/loginCustomer.png' , 
            'name' : '고객센터'
        }
    ];

    return(
        <nav>
            <ul>
                {list.map((item) => 
                <li>
                    <HeaderTopMenu 
                        href = {item.href} 
                        src = {item.src}
                        name = {item.name}
                    />
                </li>
                )}
            </ul>
        </nav>
    );
}