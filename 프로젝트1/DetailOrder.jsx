import { CiCircleQuestion } from "react-icons/ci";
import { TfiArrowCircleDown } from "react-icons/tfi";

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
                            <span>d</span>
                            <a href="#">스타일<span>5</span>건</a>
                        </div>
                        <div className="goods-info-middle">
                            <ul>
                                <li>
                                    <span>카드혜택</span>
                                    <span>카드사별 혜택 안내</span>
                                    <a href="">자세히보기</a>
                                </li>
                                <li>
                                    <span>기프트포인트</span>
                                    <span>멤버십 고객 한정 최대 47,900원 할인(10%)</span>
                                    <a href="">자세히보기</a>
                                </li>
                                <li>
                                    <span>포인트 적립</span>
                                    <span>멤버십포인트 2,400P</span>
                                </li>
                                <li>
                                    <span>배송방법</span>
                                    <span>택배배송</span>
                                    <span><CiCircleQuestion /></span>
                                    <span>무료배송</span>                                    
                                    <a href=""><span>배송방법 더보기</span><TfiArrowCircleDown /></a>   
                                    {/* <div> 여기 작업해야함 
                                        <span>매장픽업</span>   
                                        <span><CiCircleQuestion /></span>                                     
                                    </div>  
                                    <div>
                                        <span>빠른배송</span>  
                                        <span><CiCircleQuestion /></span>                                      
                                    </div>  */}
                                </li>
                            </ul>
                        </div>
                        <div className="goods-info-bottom">
                            <div className="goods-info-bottom-color">
                                <span>색상</span>
                                <ul>
                                    {/* 색상은 json에 잇는 색상 가져와서 보여주기 나중에 수정 */}
                                    <li style={{'backgroundColor':'red'}}></li>
                                    <li style={{'backgroundColor':'blue'}}></li>
                                    <li style={{'backgroundColor':'black'}}></li>
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
                                <button>1</button>
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