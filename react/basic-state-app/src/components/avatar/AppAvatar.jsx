import { useEffect, useState } from "react";
import AvatarBox from "./AvatarBox.jsx";
import './avatar.css';

export default function AppAvatar(){
    const [list, setList] = useState([]);
    useEffect(()=>{
        fetch("/data/avatar.json")
            .then(data => data.json())
            .then(jsonData => setList(jsonData))
            .catch(error => console.log(error))
    },[])

    // const list =[
    //     {
    //         "src" : "/images/people1.webp" ,
    //         "name" : "leeknow" ,
    //         "new" : true
    //     },
    //     {
    //         "src" : "/images/people2.webp" ,
    //         "name" : "jin", 
    //         "new" : false
    //     },
    //     {
    //         "src" : "/images/people3.webp" ,
    //         "name" : "han", 
    //         "new" : false   
    //     }
    // ];


    return(
        <ul>
            {list && list.map((item) => 
                <li>
                    <AvatarBox 
                        src={item.src}
                        name={item.name}
                        isNew={item.isNew}/>
                </li>
            )}
        </ul>
         );
}
