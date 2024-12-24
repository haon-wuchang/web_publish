import { useEffect, useState } from "react";
import HeaderBottomMenu from "./HeaderBottomMenu.jsx";
import { fetchJson } from "../js/commons.js";

export default function HeaderBottomMenuList() {
    const [names, SetNames] =useState([]);
    useEffect(() =>{       
                fetchJson('data/cgv_header.json')   //함수 사용
                    .then(result => SetNames(result.bottomMenuList))  
                    .catch(error => console.log(error));
                    // fetch('/data/cgv_header.json')
        //     .then(data => data.json())
        //     .then(jsonData => SetNames(jsonData.bottomMenuList))
        //     .catch(error => console.log(error))
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