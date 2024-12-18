import BestBookButton from "./BestBookButton.jsx";
import BestBookAvatar from "./BestBookAvatar.jsx";
import BestBookContent from "./BestBookContent.jsx";

export default function BestBook({list}) {

    return (
        <>
        {list && list.map((item,index)=>
            <div className = "div">
                <BestBookAvatar 
                    rank ={index+1}  // => 실시간,특가 이런 메뉴 눌렀을떄 rank 가 그대로 나오면 이상하자나 1번나오고6번나오고하면 그래서 index 값 추가해서 index 값으로만 나오게 한거임 그리고 index는 0부터 시작이라 +1 한거임
                    img={item.img}
                />
                <BestBookContent 
                    suggest = {item.suggest}
                    today = {item.today}
                    type = {item.type}
                    title ={item.title}
                    author ={item.author}
                    company = {item.company}
                    pubDate = {item.pubDate}
                    price = {item.price}
                    perSale = {item.perSale}
                    point ={item.point}
                />
                <BestBookButton />
            </div>
        )}
        </>
    );
}


