import React from 'react';
import  {Outlet, Link} from 'react-router-dom'; // Link는 <a> 태그의 링크역할과 비슷함
import Header from './Header.jsx';

export default function Layout() {
    return (  // 여기에 레이아웃 디자인을 하면된다 헤더 Outlet 푸터 이케만들면 됨( 바디대신에 Outlet 이다 Outlet은 계속 내용이 바뀌니까  about 인지 login 인지 Outliet이 자동으로 대치가된다)
        <div>
            <Header>
                <Link to = '/' style={{'padding':'10px'}}>Home</Link>
                <Link to = '/login' style={{'padding':'10px'}}>CgvLoginForm</Link>
                <Link to = '/signup' style={{'padding':'10px'}}>Signup</Link>
                <Link to = '/about' style={{'padding':'10px'}}>About</Link>
                <Link to = '/support' style={{'padding':'10px'}}>Support</Link>
                <Link to = '/bestseller' style={{'padding':'10px'}}>AppBestSeller</Link>
            </Header>
            <Outlet />
            {/* <Footer>
            </Footer> */}
        </div>
    );
}

// <Link to = '이동하려는path이름'>컴포넌트명</Link> 
// => 해당 컴포넌트로 연결된다