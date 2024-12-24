import { useEffect, useState } from "react";
import HeaderTopMenu from "./HeaderTopMenu.jsx"
import { fetchJson } from "../js/commons.js";

export default function HeaderTopMenuList() {
    const [list,setList] = useState([]);
    useEffect(() => {
        // fetch('/data/cgv_header.json')
        //     .then((data) => data.json())
        //     .then((jsonData) => setList(jsonData.topMenuList))
        //     .catch(error => console.log(error))
        fetchJson('/data/cgv_header.json')
            .then(data => setList(data.topMenuList))
            .catch(error => console.log(error));
    },[]);

    return(
        <nav>
            <ul>
                {list && list.map((item) => 
                <li>
                    <HeaderTopMenu 
                        href = {item.href} 
                        src = {item.src}
                        name = {item.name}
                    />
                </li>
                )}
            </ul>
        </nav>
    );
}