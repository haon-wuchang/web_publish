import Product from "./Product.jsx";

export default function ProductList() {
    const list =[
        {
            "img" : "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021395913ko.jpg?l=ko",
            "title" : "메디힐",
            "introduct" : "[올영1등크림] 에스트라 아토베리어365 크림 80ml 어워즈 한정기획 (+30ml+세라-히알 속수분 앰플 3ml)",
            "price" : "39,900원",
            "salePrice" : "28,900원",
        },
        {
            "img" : "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0021/A00000021392508ko.jpg?l=ko",
            "title" : "에스트라",
            "introduct" : "[1위패드/100+100+14매] 메디힐 마데카소사이드 흔적패드 어워즈 한정기획",
            "price" : "33,000원",
            "salePrice" : "26,000원",
        },
        {
            "img" : "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0017/A00000017142380ko.jpg?l=ko",
            "title" : "어노브",
            "introduct" : "[2024 어워즈/3년 연속 1위] 어노브 딥 데미지 헤어 트리트먼트 EX 더블/듀오 기획4종 택1 (텐더블룸/웜페탈)",
            "price" : "42,000원",
            "salePrice" : "29,800원",
        },
        {
            "img" : "https://image.oliveyoung.co.kr/cfimages/cf-goods/uploads/images/thumbnails/400/10/0000/0013/A00000013906380ko.jpg?l=ko",
            "title" : "정샘물",
            "introduct" : "[2024 어워즈/올영쿠션 1위] 정샘물 에센셜 스킨누더 쿠션 어워즈 한정 기획 (글리터팟+립토퍼+물크림 미니)",
            "price" : "45,000원",
            "salePrice" : "36,000원",
        }
    ];

    return (
        <ul className="body-ul">
            {list && list.map((item) =>
            <li>
                <Product 
                    img={item.img}
                    title={item.title}
                    introduct={item.introduct}
                    price={item.price}
                    salePrice={item.salePrice}
                />
            </li>
            )}
        </ul>
    );
}

