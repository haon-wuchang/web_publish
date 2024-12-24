import PackageContent from "./PackageContent.jsx";
import { useEffect, useState } from "react";

export default function Package() { 
    const [pList,setPList] = useState([]);
    useEffect(()=>{
        fetch('data/cgv_content.json')
            .then((data) => data.json())
            .then((jsonData) => setPList(jsonData.packageList))
            .catch(error => console.log(error));
    },[]);

    return(
        <section className="package-ex-content-list">
            {pList && pList.map((item) =>   //pList 가 존재할때만 map 을 돌려서 출력하겠습니다.
                <PackageContent title={item.title} list={item.list}/> 
            )}
        </section>                         
    );
}



