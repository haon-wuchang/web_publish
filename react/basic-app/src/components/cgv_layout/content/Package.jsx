import PackageContent from "./PackageContent.jsx";
import { useEffect, useState } from "react";

export default function Package() { 
    const [packageList,setPackageList] = useState([]);
    useEffect(()=>{
        fetch('./data/cgv_content.json')
            .then((data) => data.json())
            .then((jsonData) => setPackageList(jsonData.packageList))
            .catch(error => console.log(error));
    },[]);

    return(
        <section className="package-ex-content-list">
            {packageList.map((item) => 
                <PackageContent title={item.title} list={item.list}/> 
            )}
        </section>                         
    );
}



