import React, {useState, useEffect} from "react";
import axios from 'axios';
import ProductAvata from "./ProductAvata.jsx";
import { Link } from "react-router-dom";
export default function ProductList() {
    const [list, setList] = useState([]); // list 변경 시 실시간 업데이트

    useEffect(() => {
        axios.get('data/products.json') //서버와 서버끼리 연결할 때 사용
        .then((res) => {
            console.log('data --> ', res.data);
            setList(res.data);
        })
        .catch(err => console.log(err));

    }, []);
    
    //출력 리스트 생성 [[{},{},{}], [{},{},{}], [{},{},{}]]
    const rows = [];
    for(let i = 0; i < list.length; i+=3){ //[{0},{1},{2}]
        rows.push(list.slice(i, i + 3)); //[{0},{1},{2}]
    }
    console.log(rows);
    
return (
    <div>
        {
           rows.map((rowArray)=> 
                <div className="product-list">
                    {rowArray.map((product) => 
                        <Link to ={`/products/${product.pid}`} key={product.pid}>
                            <ProductAvata img={product.image}></ProductAvata>
                        </Link>
                    )
                    }
                 </div>
            )
        }
    </div>
    );
};