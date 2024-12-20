import React, { useEffect, useState } from 'react';
import MenuList from './MenuList.jsx';
import ItemList from './ItemList.jsx';

export default function AppOlive() {
    const [categoryNm,setCategoryNm] = useState('total');
    const [mList,setMlist] =useState([]);
    const [iList,setIlist] =useState([]);

    useEffect(()=>{
        fetch('/practice-data/olive.json')
            .then(data=>data.json())
            .then(jsonData=>{
                setMlist(jsonData.menuList);
                if(categoryNm==='total'){
                    setIlist(jsonData.itemList);
                }else {
                   const filterArray = jsonData.itemList.filter((item)=>
                    item.category===categoryNm );
               
                    setIlist(filterArray);
                }
            })
            .catch(error=>console.log(error));
    },[categoryNm]);


    const handleGrand = (category) => {
        setCategoryNm(category);       
    }

    return (
        <div>
            <MenuList 
                hand2={handleGrand} menuList={mList} />
            <ItemList  itemList={iList}/>
        </div>
    );
}

