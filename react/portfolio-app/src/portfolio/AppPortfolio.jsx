import React from 'react';
import Header from './Header.jsx';
import HeaderIcon from './header/HeaderIcon.jsx';
import MenuList from './header/MenuList.jsx';
import Content from './Content.jsx';
import HeaderContent from './content/HeaderContent.jsx';
import AboutMe from './content/about_me/AboutMe.jsx';
import MySkills from './content/my_skills/MySkills.jsx';
import MyWork from './content/my_work/MyWork.jsx';
import Footer from './Footer.jsx';

export default function AppPortfolio() {
    return (
        <div>
            <Header>
                <HeaderIcon />
                <MenuList />
            </Header>
            <Content>
                <HeaderContent />
                <AboutMe />
                <MySkills />
                <MyWork />
            </Content>
            <Footer>

            </Footer>
        </div>
    );
}

//Header, Content Footer 다 children 해놔서 그안에 들어갈 파일은 
// 다 여기서 임포트하고 여기에 < ~> 넣어주면됨