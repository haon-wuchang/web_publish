import {useEffect, useState} from "react";
import Dwitter from "./Dwitter";
import "./Dwitter.css";

export default function AppDwitter() {

const [dwittersList, setDwittersList] = useState([]);

    useEffect(() => {
        fetch('data/dwittersList.json')  
            .then((result) => result.json())
            .then((jsonData) => setDwittersList(jsonData))  
            .catch((error)=>console.log(error));
            },[]);  

    return(
        <div className="dwitter-container"> 
            <h1>Dwitter</h1>
            <ul className="dwitter-menu">
                <li>All Dwitter</li>
                <li>My Dwitter</li>
                <li>Login / Signup</li>
            </ul>

            {dwittersList.map((item) => 
                <Dwitter img={item.img} name={item.name} id={item.id}
                date={item.date} content={item.content}></Dwitter>
            )}
        </div>
        );
}








