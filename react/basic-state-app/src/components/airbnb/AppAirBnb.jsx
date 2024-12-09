import AirbnbComponent from "./AirbnbComponent.jsx";
import "./airbnb.css";

export default function AppAirBnb() {
    const dataList = [
        {
            "img":'https://a0.muscache.com/im/pictures/prohost-api/Hosting-696191916548468403/original/88873c6c-3809-42e2-9e65-9a6d879325d5.jpeg?im_w=720&im_format=avif',
            "p1":'영국',
            "p2":"8,752km 거리",
            "p3":'1월12일 ~17일',
            "p4":'173,235원'
            
        },
        {
            "img":'https://a0.muscache.com/im/pictures/miso/Hosting-15419676/original/155811a0-31f3-45f7-ae3b-147f8fa109fc.jpeg?im_w=720&im_format=avif',
            "p1":'영국',
            "p2":"8,752km 거리",
            "p3":'4월02일 ~17일',
            "p4":'313,235원'
            
        },
        {
            "img":'https://a0.muscache.com/im/pictures/miso/Hosting-671408798849566856/original/65f5454f-ab66-4c09-9c11-1fe85773f3cc.jpeg?im_w=720&im_format=avif',
            "p1":'영국',
            "p2": "8,752km거리",
            "p3":'1월12일 ~17일',
            "p4":'173,235원'
            
        },
        {
            "img":'https://a0.muscache.com/im/pictures/miso/Hosting-671408798849566856/original/65f5454f-ab66-4c09-9c11-1fe85773f3cc.jpeg?im_w=720&im_format=avif',
            "p1":'영국',
            "p2": "8,752km거리",
            "p3":'1월12일 ~17일',
            "p4":'173,235원'
            
        },
        {
            "img":'https://a0.muscache.com/im/pictures/miso/Hosting-671408798849566856/original/65f5454f-ab66-4c09-9c11-1fe85773f3cc.jpeg?im_w=720&im_format=avif',
            "p1":'영국',
            "p2": "8,752km거리",
            "p3":'1월12일 ~17일',
            "p4":'173,235원'
            
        }
    ];

    return(
        <ul>
            {dataList.map((item) => 
                <li>
                <AirbnbComponent 
                    img={item.img}
                    p1={item.p1}
                    p2={item.p2}
                    p3={item.p3}
                    p4={item.p4}/>
                </li>

            )}
        </ul>
                    
    );
}