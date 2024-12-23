import React from 'react';
import Header from './Header.jsx';
import HeaderIcon from './header/HeaderIcon.jsx';
import HeaderBtn from './header/HeaderBtn.jsx';
import MenuList from './header/MenuList.jsx';
import Content from './Content.jsx';
import HeaderContent from './content/HeaderContent.jsx';
import SectionWrap from './content/SectionWrap.jsx';
import MajorList from './content/about_me/MajorList.jsx';
import JobList from './content/about_me/JobList.jsx';
import MySkills from './content/my_skills/MySkills.jsx';
import CordingSkill from './content/my_skills/CordingSkill.jsx';
import Tool from './content/my_skills/Tool.jsx';
import Etc from'./content/my_skills/Etc.jsx';
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
                <HeaderContent 
                    img='/images/trustping.png'
                    name='HAON'/>
                <SectionWrap
                    id='about'
                    title='About me'
                    description = 'ddddddddd!!!!!!!!!!!!!'>
                        <MajorList />
                        <JobList />
                </SectionWrap>
                <SectionWrap
                    id='skill'
                    title='My Skills'
                    description = 'Skills & Attributes'>
                    <MySkills>
                        <CordingSkill />
                        <Tool />
                        <Etc />
                    </MySkills>
                </SectionWrap>
                <SectionWrap
                    id='work'
                    title='My work'
                    description = 'Projects'>
                    <MyWork />
                </SectionWrap>
                <SectionWrap
                    id='testimonial'
                    title='Testimonial'
                    description = 'See what they say about me'>
                    <Testimonial />
                </SectionWrap>
                <Arrow />
            </Content>
            <Footer />
        </body>
    );
}
