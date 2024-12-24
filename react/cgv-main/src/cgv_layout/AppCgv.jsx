import './css/cgv.css';
import './css/commons.css';

import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";

import Content from './Content.jsx';
import ContentTop from './content/ContentTop.jsx';
import MovieChart from './content/MovieChart.jsx';
import EventSpecial from './content/EventSpecial.jsx';
import GoToButton from './content/GoToButton.jsx';

import Footer from './Footer.jsx';
import FooterContentTop from './footer/FooterContentTop.jsx';
import FooterContent from './footer/FooterContent.jsx';

export default function AppCgv() {
    return(
        <>
            <Header>
                <HeaderTop />
                <HeaderBottom />
            </Header>  
            <Content>
                <ContentTop />
                <MovieChart />
                <EventSpecial />
                <GoToButton />
            </Content>        
            <Footer>
                <FooterContentTop src='http://adimg.cgv.co.kr/images/202410/SSG/980x240.png' />
                <FooterContent />
            </Footer>
        </>
         );
}