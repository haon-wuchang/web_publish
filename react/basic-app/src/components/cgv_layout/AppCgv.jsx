import './css/cgv.css';
import './css/commons.css';

import Header from "./Header.jsx";
import HeaderTop from "./header/HeaderTop.jsx";
import HeaderBottom from "./header/HeaderBottom.jsx";

export default function AppCgv() {
    return(
        <>
            <Header>
                <HeaderTop />
                <HeaderBottom />
            </Header>               
        </>
         );
}