//Header 컴포넌트가 태그로 사용되는 파일(AppLayout)에서 <Header> 태그 안에 추가되는 자식의 컴포넌트 태그<Menu 등>가 있다면
//Header 파일에와서 props 를 children 이라는 이름으로 무조건 받아야한다
//props 인 children 은 다른이름으로 대체불가하다
import './Header.css';


export default function Header({children}) {
    return(
        <header>
            {children}
        </header>
    );
}