import EventItem from "./EventItem.jsx";
import { useEffect, useState } from "react";

export default function Event() {
    const [eList,setEList] = useState([]);
    useEffect(()=>{
        fetch('data/cgv_content.json')
            .then(data => data.json())
            .then(jsonData => setEList(jsonData.eventList))
            .catch(error => console.log(error));
    },[]);

    return(
        <section> 
            <div className="content-title-style">
                <h3 className="content-title-style-font">EVENT</h3>
                <button className="total-view-button">전체보기  &gt;</button>
            </div>
            <ul className="content-event-list">
                {eList && eList.map((item) =>  //eList의 값이 있을때만 map 을 돌리겠습니다
                    <li> 
                        <EventItem src={item.src} title={item.title} date={item.date}/>
                    </li>
                )}
            </ul>
        </section>
    );
}