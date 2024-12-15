import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList({cart}) {
    const [list, setList] = useState([]);   

    //9. 8번을 해결하기 위해서 화면출력용 리스트를 하나더 만든다
    const [display,setDisplay] = useState([]);  

    useEffect(() => {
        fetch('/data/olive.json')
            .then(data=>data.json())
            .then(jsonData => {
                setList(jsonData)
                setDisplay(jsonData)}) //12.
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
        

    //3. [] 이부분이 디펜던시임 : 디펜던시는 뭐가 변경이됫을떄 업데이트를 하고자하는내용을 자동으로 담당한다
    //3-1.디펜던시부분은 유즈스테이스로 값이 관리가 되어야함(벨류값을 유즈스테이스로 관리하도록한다) 벨류값은 문자열이라 '' 이케 적엇다
    // 인풋의 타입이 변경이 되면 useEffect가 !자동으로!호출되도록 하고싶다
    const [type, setType] = useState('');  
    
    const handleTypeChange = (event) =>{
        // console.log(event.target.value);  //2-1.value 값만 가져오게 이렇게 작성함
        setType(event.target.value); //4. 벨류값을 type 이 가져오게 된다
    }
    // console.log(type);
    
    useEffect(() => {
// 데이터가 해당 파일의 위에잇는 유즈이펙트의 jsonData에 잇기때문에 거기의 디펜던시에 타입을넣어도됨=> 실시간작업하기에 유용함
//근데 지금은 다른 방법으로 진행할거임
//6. list 를 필터링을 진행한다=>list.filter() =>  필터링한결과는 [] 새로운배열로 나오게된다.(맵도 마찬가지이다)map=> 결과['<li>~~~</li>',]
    if(type==='total'){  //10.
        setDisplay(display);
    } else{  //11.
        const filterList = list.filter((item)=>{  //7. 
                //토탈은 기본값이라 필터링필요없음
                    //=> filterList= [{item},{item}..]  // item.isSale === true는 안적어도 된다 짜피 트루 펄스밖에 없으니꺵 흠;
                if(type==='sale' && item.isSale) {
                    return item;
                }else if(type==='coupon' && item.isTicket) {
                    return item;
                }else if(type==='today' && item.isDelivery) {
                    return item;    // { } 이거잇어서 return 한거임
                }
            });
            //7.필터링한 결과를 어딘가에 넣어준다 => filterList
            //8.결과를 화면에 띄우는작업을한다 => 화면에 띄우는리스튼느 얘list 가(list 안에 jsonData 들어가잇자나) 담당하고잇으니까 얘한에 필터리스트를 넣는다
            // setList(filterList);  //8-1.근데 이렇게만하면 앞전에 필터링한 갯수만 리스트가 받아와서 ㅄ같이 나온다
            setDisplay(filterList);
        }
                
            }, [type]);  //5.디펜던시에 type 을 넣는다=>업데이트하곶자하는내용이 타입이니까 타입넣은거임 

    


    return (
        <>
        <div>
            <input type="radio" name="type" value="total" onClick={handleTypeChange}/>전체
            <input type="radio" name="type" value="sale" onClick={handleTypeChange}/>세일
            <input type="radio" name="type" value="coupon" onClick={handleTypeChange}/>쿠폰
            <input type="radio" name="type" value="today" onClick={handleTypeChange}/>오늘드림
        </div>
        
            <ul className="product-list-container">          
                {display && display.map((item) =>  //9-1 
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
        </>
    );
}        

//1. div input 만듬 -> 클릭햇을떄 이벤트발생하도록 onclick 하고 클릭햇을때 진행되는 함수선언
//1-1. <input>전체</input>  이렇게 하면 오류남 html 에서 input은 <input/> 이렇게 단일로만 실행되기때문
//2. 클릭하는데 누군징 벨류값을 받아와야한다.
// 인풋타입은 이벤트가발생하면 자체적으로 이벤트 정보를 이벤트파라미터한테 전달해준다
//=?>    const handleTypeChange = (event) =>{ 그래서 여기 이벤트 적은거임 = event는 {} 오브젝트리터럴 타입이다.


