export default function Detail() {
    const images = [
        {
            "img" : "https://image.wconcept.co.kr/images/Upload/VendorClosedBanner/20250117103402_3005374.jpg"
        },
        {
            "img" : "https://product-image.wconcept.co.kr/images/upload/board/306182087/2024120316432761.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg",
            "describe": "OTHER COLOR"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        {
            "img" : "http://qhdrus123.cafe24.com/web/24winter/Minimal%20Hood%20Padded%20Jacket_charcoal/1.jpg"
        },
        
    ]
return (
    <>

    
    <ul className="image-box">
    {
        images.map((item) => <>
        <li className="detail-img">
            <img src={item.img}/>
        </li>
        {item.describe && <p>{item.describe}</p>}
        </>)
    }
    </ul>

    <div className="detail-info">
        <span className="detail-info-tit">
        MINIMAL HOOD PADDED JACKET
        <br/>
        미니멀 후드 패디드 재킷
        </span>
        <span>FABRIC</span>
        <p>
        - Color : Charcoal<br/>
        - Shell : Cotton 45% Nylon 55%<br/>
        - Fill : Polyester 100%<br/>
        - 가볍지만 밀도가 높아 내구성이 뛰어나며, 부드러운 촉감이 특징인 소재입니다.<br/>
        - 몸 판 및 소매, 후드에는 가볍지만 촘촘한 조직으로 이루어진 솜을 충전재로 사용하여 보온성을 높였습니다.<br/>
        - 일반 솜보다 탄성이 좋고 가벼우며, 솜의 뭉침이나 틀어짐이 없고, 세탁 건조 후에는<br/> 복원력이 뛰어난 특성이 있습니다.
        </p>

        <span className="detail-info-tit">DETAIL</span>
        <p>
        - 클래식한 오버핏으로 전체적으로 볼륨감 있는 실루엣이 특징인 하프 기장의 패디드     재킷입니다.<br/>
        - 넓은 암홀 라인과 넉넉한 품으로 편안한 착용감과 멋진 실루엣을 선사합니다.<br/>
        - 래글런 소매에 라운드한 라인으로 입체감 있는 실루엣입니다.<br/>
        - 후드는 스냅으로 손쉽게 탈부착할 수 있으며, 후드와 밑단에 사용된 제 원단 스트랩<br/> 디테일로 다양한 실루엣 연출이 가능합니다.<br/>
        - 소매 끝 비조와 단추를 사용해 사이즈 조절이 가능합니다.<br/>
        - 손을 넣는 포켓의 안감은 포근한 플리스로 제작되어 손을 따뜻하게 해줍니다.
        </p>

        <span className="detail-info-tit">MAKING</span>
        <p>
        - 몸 판 및 소매, 후드에 6온스를 패디드하여 보온성과 볼륨감 있는 실루엣을 완성하였습니다.<br/>
        - 여분 단추가 포함되어 있습니다.
        </p>

        <p>
            SIZE<br/>
            SMALL / MEDIUM<br/>
            총길이 : 62.5cm / 63.5cm<br/>
            가슴너비 : 66.5cm / 68.5cm<br/>
            밑단너비 : 69.5cm / 71.5cm<br/>
            소매길이: 85.5cm / 87.5cm<br/>
            소매밑단 : 18cm / 19cm
        </p>

        <p>
            MODEL SIZE<br/>
            Height 175cm<br/>
            MEDIUM size 착용<br/>
        </p>

        <span>CARE INSTRUCTION</span>
        <p>
        - 전문가에게 드라이 클리닝 맡겨주세요.<br/>
        - 건조기 사용을 피해주세요.<br/>
        - 표백제 사용을 피해주세요.
        </p>

    </div>
    </>

    );
};