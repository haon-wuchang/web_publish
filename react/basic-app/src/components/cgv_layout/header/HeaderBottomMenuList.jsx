import { useEffect, useState } from "react";
import HeaderBottomMenu from "./HeaderBottomMenu.jsx";

export default function HeaderBottomMenuList() {
    const [names, SetNames] =useState([]);
    useEffect(() =>{
        fetch('/data/cgv_header.json')
            .then(data => data.json())
            .then(jsonData => SetNames(jsonData.bottomMenuList))
            .catch(error => console.log(error))
    },[]);

    return(
        <ul>
            {names && names.map(menu => 
                <li>
                    <HeaderBottomMenu name={menu.name} />                                           
                </li>                
            )}
        </ul>
    );
}