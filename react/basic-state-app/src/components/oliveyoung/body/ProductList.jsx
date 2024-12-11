import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList({cart}) {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/data/olive.json')
            .then(data=>data.json())
            .then(jsonData => setList(jsonData))
            .catch(error=>console.log(error));
    },[]);

    const totalCart = (id) => {
        cart(id);   
    }


    // console.log(`list-> ${list}`);
    //=>
    //index.js 에서 엄격모드가 한번 쫙일고 찍은다음에
    //여기파일에서 패치비동기니까 넘어가고 리스트 또 찍고
    //밑에 리턴애들 만들고 위로와서 패치실행해서 또 찍음 
    //그래서 콘솔출력함녀 리스트 리스트 리스트(오브젝트)
    //이케나옴 처음리스트찍히는건 엄격모드가
    //두번째꺼는 비동기 넘어가고 찍은거
    //세번째가 비동기처리하고 값까지 찍은거임
    
    return (
        <div className="body-container">        
            <ul className="body-ul">          
                {list && list.map((item) =>
                <li>
                    <Product 
                        onClick = {totalCart}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        introduct={item.introduct}
                        price={item.price}
                        salePrice={item.salePrice}
                        isSale={item.isSale}
                        isTicket={item.isTicket}
                        isDelivery={item.isDelivery}
                    />
                </li>
                )}
            </ul>
        </div>
    );
}        

