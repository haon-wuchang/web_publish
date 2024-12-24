import { useEffect, useState } from "react";
import SpecialItem from "./SpecialItem.jsx";

export default function Special() {
    const [sList,setSList] = useState([]);
    useEffect(() => {
        fetch('data/cgv_content.json')
            .then(data => data.json())
            .then(jsonData => setSList(jsonData.specialList))
            .catch(error => console.log(error));
    }, []);

    return(
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">특별관</h3>
                    <button className="total-view-button">전체보기  &gt;</button>
                </div>
                <div className="special-content-list">
                    <div>
                        <img src="images/special1.png" alt="특별관이미지" width="400px" />
                    </div>
                    <ul>
                        {sList && sList.map((item) => //sList 의 값이 있을때만 map 을 돌리겠습니다
                            <li>  
                            <SpecialItem title={item.title} intro={item.intro}/> 
                            </li>
                        )}
                    </ul>
                </div>
            </section>
    );
}