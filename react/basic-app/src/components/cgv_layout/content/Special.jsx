
export default function Special() {
    return(
        <section>
                <div className="content-title-style">
                    <h3 className="content-title-style-font">특별관</h3>
                    <button className="total-view-button">전체보기  &gt;</button>
                </div>
                <div className="special-content-list">
                    <div>
                        <img src="/images/special1.png" alt="특별관 1" width="400px" />
                    </div>
                    <ul>
                        <li>  
                            <span>SUITE CINEMA</span>
                            <span>#호텔 컨셉의 프리미엄관</span>
                        </li>
                        <li>
                            <span>CINE & LIVINGROOM</span>
                            <span>#신개념 소셜 상영관</span>
                        </li>
                        <li>
                            <span>4DX</span>
                            <span>#모션시트 #오감체험</span>
                        </li>
                        <li>
                            <span>CINE de CHEF</span>
                            <span>#쉐프가 있는 영화관</span>
                        </li>
                    </ul>
                </div>
            </section>
    );
}