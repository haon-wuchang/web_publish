import PackageContentTitle from "./PackageContentTitle.jsx";
import PackageContentItem from "./PackageContentItem.jsx";

export default function PackageContent ({title, list}) {  //얘가 3개가 반복되니까 props 값 받는거임 그리고 얘를 호출하는데서 값을 정의해주거나 제이슨파일만들어서 거기서 값 가져오거나
    return(
            <div className="package-ex-content-border">
                <PackageContentTitle title={title}/>
                <ul>
                    {list && list.map((item) =>    // list 배열이 없어서 map 을 못돌리니까 에러가 뜨게된다
                        //  list && ==> list 가 true 이면 이라는 뜻이다(list 에 값이 있으면 true 임)  => list가 true 이면 list.map 을 돌리겠다
                        <li>
                            <PackageContentItem 
                                src={item.src} 
                                text={item.text} 
                                price={item.price}/>
                        </li>
                    )}
                </ul>
            </div>
    );
}
