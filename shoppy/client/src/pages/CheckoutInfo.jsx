import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "../styles/cart.css";
import "../styles/checkoutinfo.css";
import { useEffect } from "react";
import { AuthContext } from "../auth/AuthContext.js";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext.js";
import { CartContext } from "../context/cartContext.js";
import { useOrder } from "../hooks/useOrder.js";
import axios from "axios";

export default function CheckoutInfo() {
    const {isLoggedIn} = useContext(AuthContext);
    const {getOrderList} = useOrder();
    const{ totalPrice} = useContext(CartContext);  
    const {orderList,member,setMember} = useContext(OrderContext);
    useEffect(()=>{
        if(isLoggedIn) {
            getOrderList();     
        }
    },[isLoggedIn]);

// console.log('orderlist',orderList);
// console.log('member',member); 

/** 주소검색 버튼Toggle */
const [isOpen, setIsOpen] = useState(false);

/** 주소 검색 버튼 */
const handleToggle = () => {
    setIsOpen(!isOpen);
};

//---- DaumPostcode 관련 디자인 및 이벤트 시작 ----//
    const themeObj = {
        bgColor: "#FFFFFF",
        pageBgColor: "#FFFFFF",
        postcodeTextColor: "#C05850",
        emphTextColor: "#222222",
    };

    const postCodeStyle = {
        width: "360px",
        height: "480px",
    };

    const completeHandler = (data) => {
        const { address, zonecode } = data;
        // handleAddress({ zipcode: zonecode, address: address });
    };

    const closeHandler = (state) => {
        if (state === "FORCE_CLOSE") {
        setIsOpen(false);
        } else if (state === "COMPLETE_CLOSE") {
        setIsOpen(false);
        // refs.detailAddressRef.current.value = "";
        // refs.detailAddressRef.current.focus();
        }
    };
//---- DaumPostcode 관련 디자인 및 이벤트 종료 ----//

// 결제함수  - 카카오페이 qr 결제 연동 //
const handlePayment = async() => {
    const id  = localStorage.getItem('user_id');
    try {
        const res = await axios
                        .post('http://localhost:9000/payment/qr',{
                            'id':id , 
                            'item_name':'테스트상품',
                            'total_amount':1000   
                        });
            console.log(res.data.next_redirect_pc_url);  
            if(res.data.next_redirect_pc_url){ 
                window.location.href = res.data.next_redirect_pc_url;
            }
        
    } catch (error) {
        console.log('카카오페이 qr 결제 에러 발생',error);
    }        
}



return (
    <div className="cart-container">
    <h2 className="cart-header"> 주문/결제</h2>
    <div className="section">
        {/* 구매자 정보 */}
        <h2 className="section-title">구매자정보</h2>
        <div className="info-box">
        <div className="info-grid">
            <div className="label">이름</div>
            <div className="value">{member.name}</div>

            <div className="label">이메일</div>
            <div className="value">{member.email}</div>

            <div className="label">휴대폰 번호</div>
            <div className="value phone-input">
            <input type="text" defaultValue={member.phone} />
            <button className="btn">수정</button>
            </div>
        </div>
        </div>
    </div>
    {/* 받는사람 정보 */}
    <div className="section">
        <h2 className="section-title">
        받는사람정보 &nbsp;&nbsp;&nbsp;
        <button onClick={handleToggle}>배송지 변경</button>
        </h2>
        <div className="info-box">
        <div className="info-grid">
            <div className="label">이름</div>
            <div className="value">{member.name}</div>

            <div className="label">배송주소</div>
            {member.zipcode ? 
                <div className="value">{member.zipcode}/{member.address}</div>
               : <div className="value">배송지를 추가해주세요</div>
            }

            <div className="label">연락처</div>
            <div className="value">{member.phone} / 010 - 9919 - 1234</div>

            <div className="label">배송 요청사항</div>
            <div className="value phone-input">
            <input type="text" defaultValue="문 앞" />
            <button className="btn">변경</button>
            </div>
        </div>
        </div>
    </div>
    {isOpen && (
        <div>
        <DaumPostcode
        className="postmodal"
        theme={themeObj}
        style={postCodeStyle}
        onComplete={completeHandler}  //주소 검색해서 선택할때임
        onClose={closeHandler}
        />
        </div>
    )}

    {/* 주문 정보 */}
    <div className="section">
        <h2 className="section-title">주문 상품</h2>
        {orderList.map((item)=>
        <div className="info-box">
        <div className="info-grid">
            <div className="value">
                <img src={item.image} alt="" style={{width: '100px'}}/>
                {item.pname}/{item.qty}/{item.price}
            </div>
        </div>
        </div>
        )}
    </div>
    <div class="section">
        <h2>결제정보</h2>
        <table class="payment-table">
        <tr>
            <td>총상품가격</td>
            <td class="price">{totalPrice.toLocaleString()}원</td>
        </tr>
        <tr>
            <td>즉시할인</td>
            <td class="discount">-36,000원</td>
        </tr>
        <tr>
            <td>할인쿠폰</td>
            <td class="coupon">
            0원 <span class="info">적용 가능한 할인쿠폰이 없습니다.</span>
            </td>
        </tr>
        <tr>
            <td>배송비</td>
            <td class="price">0원</td>
        </tr>
        <tr>
            <td>쿠페이캐시</td>
            <td class="price">
            0원 <span class="info">보유 : 0원</span>
            </td>
        </tr>
        <tr class="total">
            <td>총결제금액</td>
            <td class="total-price">{(totalPrice-36000).toLocaleString()}원</td>
        </tr>
        </table>
    </div>

    <div class="section">
        <h2>결제 수단</h2>
        <div class="payment-method">
        <label class="radio-label">
            <input type="radio" name="payment" checked />
            카카오페이 
        </label>
        </div>
        {/* <div class="payment-method">
        <label class="radio-label">
            <input type="radio" name="payment"  />
            신용/체크카드
        </label>
        <select>
            <option>네모카드 4 (교통) / 12345******876*</option>
        </select>
        <input type="checkbox" checked /> 기본 결제 수단으로 사용
        <p class="info">
            할부는 5만원 이상부터 가능합니다.
            <br />
            해외발급 카드는 쿠팡 앱, 모바일 웹에서 사용 가능합니다.
        </p>
        <a href="#" class="link">
            카드할인 및 무이자할부 안내
        </a>
        </div> */}

        <div class="payment-method">
        <label class="radio-label">
            <input type="radio" name="payment" />
            쿠페이 머니 <span class="badge">최대 캐시적립</span>
        </label>
        </div>

        <div class="payment-method">
        <label class="radio-label">
            <input type="radio" name="payment" />
            다른 결제 수단 <span class="arrow">▼</span>
        </label>
        </div>
    </div>

    <div class="terms">
        <input type="checkbox" id="terms" />
        <label for="terms">구매조건 확인 및 결제대행 서비스 약관 동의</label>
        <br />
        <input type="checkbox" id="privacy" />
        <label for="privacy">개인정보 국외 이전 동의</label>
    </div>
{/* 1. 이벤트함수 선언 */}
    <button className="pay-button" onClick={handlePayment}>결제하기</button>
    </div>
);
}