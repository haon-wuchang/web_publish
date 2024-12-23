import React from 'react';
import Header from './Header.jsx';
import HeaderIcon from './header/HeaderIcon.jsx';
import HeaderBtn from './header/HeaderBtn.jsx';
import MenuList from './header/MenuList.jsx';
import Content from './Content.jsx';
import HeaderContent from './content/HeaderContent.jsx';
import AboutMe from './content/about_me/AboutMe.jsx';
import MySkills from './content/my_skills/MySkills.jsx';
import MyWork from './content/my_work/MyWork.jsx';
import Testimonial from './content/testimonial/Testimonial.jsx';
import Arrow from './Arrow.jsx';
import Footer from './Footer.jsx';
import './css/style.css';

export default function AppPortfolio() {
    return (
        <body>
            <Header>
                <HeaderIcon 
                    img="/images/favicon.ico"
                    name='HAON'/>
                <MenuList />
                <HeaderBtn />
            </Header>
            <Content>
                <HeaderContent />
                <AboutMe />
                <MySkills />
                <MyWork />
                <Testimonial />
                <Arrow />
            </Content>
            <Footer />
        </body>
    );
}
