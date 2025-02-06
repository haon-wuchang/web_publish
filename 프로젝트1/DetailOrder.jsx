import { CiCircleQuestion } from "react-icons/ci";

export default function DetailOrder(){
    return (
        <div className="godsInfo-area">
                        <div class="tags">
                            <span>무료배송</span>
                        </div>
                        <h2 class="brand-name">
                            <a href="/Clove/main?brandShopNo=BDMA19E27&amp;brndShopId=RTCLO&amp;dspCtgryNo=">Clove</a>
                        </h2>
                        <div class="gods-name" id="goodDtlTitle">[24FW clove] Fair Isle Sweater (Brown)</div>
                        <div class="price-info">
                            <span class="gods-price">
                                    <span class="cost">
                                        {/* <span class="wa_hidden">원가</span> */}
                                        <del>238,000</del>
                                    </span>
                                        <span class="sale">
                                        {/* <span class="wa_hidden">할인율</span> */}
                                        <span class="discount">37%</span>
                                        {/* <span class="wa_hidden">판매가</span> */}
                                        <span class="price">149,940</span>
                                        <CiCircleQuestion />
                                        {/* <span class="tooltip-info">

                                            <span class="tooltip-info">
                                                    <i class="info sm">?</i>
                                                    <div class="tooltip-box">
                                                        <span class="tip-title">할인내역</span>
                                                        <dl class="price-info">
                                                            <dt>상품할인</dt>
                                                            <dd>-71,400원</dd>
                                                            <dt>쿠폰할인<p>2025-01-06&nbsp;19:20 ~ 2025-02-10&nbsp;09:59</p></dt>
                                                            <dd>-16,660원</dd>
                                                        </dl>
                                                        <dl class="total-price">
                                                            <dt>총 할인금액</dt>
                                                            <dd>-88,060원</dd>
                                                        </dl>
                                                        <p class="tip-txt">현재 가격은 즉시할인쿠폰이 포함된 금액이며 회원에 한하여 적용됩니다.</p>
                                                    </div>
                                                </span>
                                        </span> */}
                                        </span>
                            </span>
                            <button class="btn bk sm" type="button" onclick="openGodDwldPsbCpnListLayer(); return false;"
                                style={{"backgroundColor":"black"}}>
                                <span>쿠폰다운</span>
                            </button>
                        </div>
                        <div id="goodsInfoReviewDiv" class="review-info">
                            <span class="point"><i aria-label="rate"></i><span id="goodsInfoReviewScore">5</span></span>
                            <a href="javascript:void(0);">리뷰<span>1</span>건</a>
                            <a href="#" class="styled-cnt" id="goodsInfoDiverCnt" data-is-load="false" style={{"display": "none"}}></a>
                            <span>|</span>
                            <span class="">d</span>
                            <a href="#">스타일<span>5</span>건</a>
                        </div>
                        <div className="goods-info-middle">
                            <dl>
                                <dt>카드혜택</dt>
                                <dd>카드사별 혜택 안내
                                    <a href="">자세히보기</a>  
                                </dd>
                                <dt>기프트포인트</dt>
                                <dd>멤버십 고객 한정 최대 47,900원 할인(10%)
                                    <a href="">자세히보기</a>
                                </dd>
                                <dt>포인트 적립</dt>
                                <dd>
                                    <span>멤버십포인트 2,400P</span>
                                </dd>
                                <dt>배송방법</dt>
                                <dd>
                                    <div>
                                        <span>택배배송
                                            <span>?아이콘</span>
                                            <span>무료배송</span>
                                        </span>
                                        <a href="">배송방법 더보기</a>   
                                    </div>
                                    <div>
                                        <dd>빠른배송</dd>                                        
                                    </div>                         
                                </dd>
                            </dl>
                        </div>
                        <div className="goods-info-bottom">
                            <div className="goods-info-bottom-color">
                                <span>색상</span>
                                <ul>
                                    <li htmlFor="">BLACK</li>
                                    <li htmlFor="">ORANGE</li>
                                    <li htmlFor="">BLUE</li>
                                </ul>
                            </div>
                            <div className="goods-info-bottom-size">
                                <span>사이즈</span>
                                <ul>
                                    <li htmlFor="">XS</li>
                                    <li htmlFor="">S</li>
                                    <li htmlFor="">M</li>
                                    <li htmlFor="">L</li>
                                    <li htmlFor="">XL</li>
                                    <li htmlFor="">XXL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="goods-info-count-price">
                            <div className="goods-info-count">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="goods-info-price">
                                <span>479,000</span>
                                <span>원</span>
                            </div>
                        </div>
                        <div className="goods-info-btns">
                            <button>
                                <a href=""><span>장바구니</span></a>
                            </button>
                            <button>
                                <a href=""><span>바로구매</span></a>
                            </button>
                        </div>
                    </div>
    );
}