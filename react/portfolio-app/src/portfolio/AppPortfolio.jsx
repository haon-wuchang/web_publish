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
import ToolEtc from './content/my_skills/ToolEtc.jsx';
import CategoryList from './content/my_work/CategoryList.jsx';
import ProjectList from './content/my_work/ProjectList.jsx';
import TestimonialList from './content/testimonial/TestimonialList.jsx'
import Arrow from './Arrow.jsx';
import Footer from './Footer.jsx';
import Top from './footer/Top.jsx';
import Contact from './footer/Contact.jsx';
import Bottom from './footer/Bottom.jsx';
import './css/style.css';

export default function AppPortfolio() {
    //자식 맵핑할떄 cildren 써서 배열안에도 children 쓴거임  children이 배열이라 map 돌린거임
    const sectionList = [
        {
          "id": "about",
          "title": "About me",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
          "children": [
            { "component": "MajorList" },
            { "component": "JobList" }
          ]
        },
        {
          "id": "skill",
          "title": "My Skills",
          "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
          "children": [
            {
              "component": "MySkills",
              "children": [
                { "component": "CordingSkill" },
                { "component": "ToolEtc", "props": { "type": "Tools" } },
                { "component": "ToolEtc", "props": { "type": "Etc" } }
              ]
            }
          ]
        },
        {
          "id": "work",
          "title": "My work",
          "description": "Projects",
          "children": [
            { "component": "CategoryList" },
            { "component": "ProjectList" }
          ]
        },
        {
          "id": "testimonial",
          "title": "Testimonial",
          "description": "See what they say about me",
          "children": [
            { "component": "TestimonialList" }
          ]
        }
      ];
    
      const componentMap = {
        MajorList,
        JobList,
        MySkills,
        CordingSkill,
        ToolEtc,
        CategoryList,
        ProjectList,
        TestimonialList
      };
    //"jobList" : jobList 이런뜻임  똑같은 이름일 경우에는 jobList 이렇게만 써도딘다


      //자식 컴포넌트 렌더링 : => 재귀함수  자신의 함수안에서 계속 자기자신을 호출하는 함수를 말한다
      const renderComponent = (childObj) => {
        const Component = componentMap[childObj.component];
        if (!Component) return null;
    
        return (                                            //childObj.prop 값이잇으면 json 데이터를 문자열로 바꿔라 이말임
          <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
            {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
          </Component>
        );
      };
 //<Component 얘는 const componentMap  여기에 넣은 리스트들을 하나씩 ㅏㄱ져와서 값넣는거/....
 //JSON.stringify(childObj.props || {} 제이슨을 문자열로 바꾸는거 //  프롭스가 여려개일수잇으니 스프레드연산자쓴거다.  || 이거 or 연산자래 
//    {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))} 자식 더이상업승ㄹ떄까지 계속renderComponent 함수돌리는거임
//childObj = children 의 자식들 말하는거임"
            // children": [
            // { "component": "TestimonialList" } 여기선s 테스티모니얼이 child 임 그래서 얘 차일드를renderComponent 이 함수에서는 childObj 로 받은거양
//renderComponent 함수 호출한곳에 return 값을 전달해준다

    return (
        <>
        <body>
            <Header>
                <HeaderIcon 
                    img="images/favicon.ico"
                    name='HAON'/>
                <MenuList />
                <HeaderBtn />
            </Header>
            <Content>
                <HeaderContent 
                    img='images/trustping.png'
                    name='HAON'/>

{/* (2) SectionWrap 컴포넌트를 리스트 맵으로 순회 */}
                {sectionList && sectionList.map((section) => (
                        <SectionWrap
                            key={section.id}
                            id={section.id}
                            title={section.title}
                            description={section.description}
                        >
                            {section.children.map((child) => renderComponent(child))}

                        </SectionWrap>
                    ))}  
                      
                {/* <SectionWrap
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
                        <ToolEtc type='Tools'/>
                        <ToolEtc type='Etc' />
                    </MySkills>
                </SectionWrap>
                <SectionWrap
                    id='work'
                    title='My work'
                    description = 'Projects'>
                    <CategoryList />
                    <ProjectList />
                </SectionWrap>
                <SectionWrap
                    id='testimonial'
                    title='Testimonial'
                    description = 'See what they say about me'>
                    <TestimonialList />
                </SectionWrap> */}
                <Arrow />
            </Content>
            <Footer>
                <Top 
                    title='Lets talk'
                    email='jeon.developer.HAON@gmail.com'/>
                <Contact/>
                <Bottom />
            </Footer>
        </body>
        </>
    );
}
