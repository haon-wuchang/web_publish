import Item from './Item.jsx';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const {pid} = useParams();
    const [list,setList] = useState({});

    useEffect(()=>{
        axios.get('/data/product.json')
            .then((res) => setList(res.data))
            .catch((error) => console.log(error));
    },[]);

// 상품을 한줄에 3개씩만 하고싶음
    const rows = []
    for(let i = 0 ; i <list.length ; i+=3){
        rows.push(list.slice(i,i+3));
    }   


    return (
        <div>
            {rows.map((array)=>
                <div className='product-list'>
                    {array.map((item)=>
                        <Link to={`/productdetail/${item.pid}`}>
                        <Item img={item.img}/>
                        </Link>
                    )}
                </div>                
            )}
        </div>

    );
}

