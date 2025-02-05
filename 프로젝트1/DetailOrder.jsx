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
                                        <em class="discount">37%</em>
                                        {/* <span class="wa_hidden">판매가</span> */}
                                        <em class="price">149,940</em>
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
                            style={{"backgroundColor":"yellowgreen"}}><span>쿠폰다운</span></button>
                        </div>
                        <div id="goodsInfoReviewDiv" class="review-info">
                            <span class="point"><i aria-label="rate"></i><em id="goodsInfoReviewScore">5</em></span>
                            <a href="javascript:void(0);">리뷰<em>1</em>건</a>
                            <a href="#" class="styled-cnt" id="goodsInfoDiverCnt" data-is-load="false" style={{"display": "none"}}></a>
                            <span></span>
                            <span class=""><em id="goodsInfoStyleScore"></em></span>
                            <a href="javascript:void(0);">스타일<em>5</em>건</a>
                            <a href="#" class="styled-cnt" id="goodsInfoDiverCnt" data-is-load="false" style={{"display": "none"}}></a>
                        </div>
                        <div className="goods-info-middle">
                            <dl>
                                <dt>카드혜택</dt>
                                <dd>카드사별 혜택 안내</dd>
                                <a href="">자세히보기</a>  
                                <dt>기프트포인트</dt>
                                <dd>멤버십 고객 한정 최대 47,900원 할인(10%)</dd>
                                <a href="">자세히보기</a>
                                <dt>포인트 적립</dt>
                                <span>멤버십포인트 2,400P</span>
                                <dt>배송방법</dt>
                                <dd>
                                    <div>
                                        <em>택배배송</em>
                                        <span>무료배송</span>
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
                                <label htmlFor="">검정색</label>
                                <label htmlFor="">회색</label>
                            </div>
                            <div className="goods-info-bottom-size">
                                <span>사이즈</span>
                                <label htmlFor="">001[S]</label>
                                <label htmlFor="">002[M]</label>
                            </div>
                        </div>
                        <div className="수량 가격">
                            <div>
                                <div>
                                    <a href="">-</a>
                                    <input type="text" />1
                                    <a href="">+</a>
                                </div>
                                <span>479,000원</span>
                                <span>원</span>
                            </div>
                        </div>
                        <div className="장바구니 바로구매">
                            <a href=""><span>장바구니</span></a>
                            <a href=""><span>바로구매</span></a>
                        </div>
                    </div>
    );
}