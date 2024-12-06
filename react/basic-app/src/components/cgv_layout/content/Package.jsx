import PackageContent from "./PackageContent.jsx";

export default function Package() { 
    const exList = [
        // "list" : ""  리스트 배열도 어디서 따로 만들어야댈거같은뎅 흠
        {"title" : "패키지" , 'list' : [
            {
            'src' : "/images/package1.jpg",
            'text' : "우리 패키지",
            'price' : "15000"
        },
            {
            'src' : "https://img.cgv.co.kr/GiftStore/Product/Pc/List/17170513228970.jpg",
            'text' : "나랑너 패키지",
            'price' : "35000" 
        },
            {
            'src' : "https://img.cgv.co.kr/GiftStore/Product/Pc/List/16778206767040.jpg",
            'text' : "좋은 날 패키지",
           'price' : "18000"
        },
        ] },
        {"title" : "영화관람권" , 'list' : [
            {
                'src' : "/images/movieticket.jpg",
                'text' : "CGV 영화관람권",
                'price' : "13000"
            },
                {
                'src' : "https://img.cgv.co.kr/GiftStore/Product/Pc/List/16104445886810.jpg",
                'text' : "IMAX 영화관람권",
                'price' : "13000" 
            },
                {
                'src' : "https://img.cgv.co.kr/GiftStore/Product/Pc/List/16105061088530.jpg",
                'text' : "4DX 영화관람권",
               'price' : "13000"
            },

        ] },
        {"title" : "기프트카드" , 'list' : [
            {
                'src' : "/images/giftcard.jpg",
                'text' : "PACONNIE A형",
                'price' : "금액충전형"
            },
                {
                'src' : "https://img.cgv.co.kr/GiftStore/Product/Pc/List/15814158039890.jpg",
                'text' : "PACONNIE B형",
                'price' : "금액충전형" 
            },
                {
                'src' : "https://img.cgv.co.kr/GiftStore/Product/Pc/List/15814162227570.jpg",
                'text' : "PACONNIE C형",
               'price' : "금액충전형"
            },

        ] }
    ];

    return(
        <section className="package-ex-content-list">
            {exList.map((item) => 
                <PackageContent title={item.title} list={item.list}/> 
            )}
        </section>                         
    );
}



