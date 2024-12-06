import EventItem from "./EventItem.jsx";
import { useEffect, useState } from "react";

export default function Event() {
    const [eventList,setEventList] = useState([]);
    useEffect(()=>{
        fetch('/data/cgv_content.json')
            .then(data => data.json())
            .then(jsonData => setEventList(jsonData.eventList))
            .catch(error => console.log(error));
    },[]);

    return(
        <section> 
            <div className="content-title-style">
                <h3 className="content-title-style-font">EVENT</h3>
                <button className="total-view-button">전체보기  &gt;</button>
            </div>
            <ul className="content-event-list">
                {eventList.map((item) => 
                    <li> 
                        <EventItem src={item.src} title={item.title} date={item.date}/>
                    </li>
                )}
            </ul>
        </section>
    );
}