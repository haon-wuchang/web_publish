import SpecialItem from "./SpecialItem.jsx";

export default function Special() {
    const list = [
        {'title' : 'SUITE CINEMA', 'intro' : '#호텔 컨셉의 프리미엄관'},
        {'title' : 'CINE & LIVINGROOM', 'intro' : '#신개념 소셜 상영관'},
        {'title' : '4DX', 'intro' : '#모션시트 #오감체험'},
        {'title' : 'CINE de CHEF', 'intro' : '#쉐프가 있는 영화관'}
    ];

    return(
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">특별관</h3>
                    <button className="total-view-button">전체보기  &gt;</button>
                </div>
                <div className="special-content-list">
                    <div>
                        <img src="/images/special1.png" alt="특별관이미지" width="400px" />
                    </div>
                    <ul>
                        {list.map((item) =>
                            <li>  
                            <SpecialItem title={item.title} intro={item.intro}/> 
                            </li>
                        )}
                    </ul>
                </div>
            </section>
    );
}