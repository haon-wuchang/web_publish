import PackageContent from "./PackageContent.jsx";
import { useEffect, useState } from "react";

export default function Package() { 
    const [pList,setPList] = useState([]);
    useEffect(()=>{
        fetch('./data/cgv_content.json')
            .then((data) => data.json())
            .then((jsonData) => setPList(jsonData.packageList))
            .catch(error => console.log(error));
    },[]);

    return(
        <section className="package-ex-content-list">
            {pList.map((item) => 
                <PackageContent title={item.title} list={item.list}/> 
            )}
        </section>                         
    );
}



