import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import CommonsImg from './CommonsImg.jsx';

export default function AppPortfolio() {
    return (
        <div>
            <Header>
                <CommonsImg />
            </Header>
            <Content>

            </Content>
            <Footer>

            </Footer>
        </div>
    );
}

//Header, Content Footer 다 children 해놔서 그안에 들어갈 파일은 
// 다 여기서 임포트하고 여기에 < ~> 넣어주면됨