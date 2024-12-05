import './css/cgv.css';
import './css/commons.css';

import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";

import Content from './Content.jsx';
import ContentTop from './content/ContentTop.jsx';
import MovieChart from './content/MovieChart.jsx';
import EventSpecial from './content/EventSpecial.jsx';


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
            </Content>        
        </>
         );
}