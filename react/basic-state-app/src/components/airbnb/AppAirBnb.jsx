import { useEffect, useState } from "react";
import AirbnbComponent from "./AirbnbComponent.jsx";
import "./airbnb.css";

export default function AppAirBnb() {
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        fetch('/data/airbnb.json')
            .then(data => data.json())
            .then(jsonData => setDataList(jsonData))
            .catch(error => console.log(error))
    },[])

    return(
        <ul>
            {dataList && dataList.map((item) => 
                <li>
                <AirbnbComponent 
                    img={item.img}
                    p1={item.p1}
                    p2={item.p2}
                    p3={item.p3}
                    p4={item.p4}
                    good={item.good}
                    color={item.color}/>
                </li>
            )}
        </ul>
    );
}