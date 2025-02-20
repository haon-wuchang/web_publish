import axios from 'axios';

export const paymentKakaoPay = async(req, res) => {
    console.log('ㅋ알ㅋㅇ라',req.body); 

    try {
        console.log(req.body);
        const {id, item_name, total_amount} = req.body;  
        const KAKAO_ADMIN_KEY = "f4b70b66e258ae0e3ef085288f144608";
        // 주문건수가 많으니까 유니크하게 주문번호 생성 = uniqueSuffix 
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        
        // 여기는 카카오에서 만든거 복붙해서 쓰는거임 여깃느거 주소빼고 내맘대로 만들면 에러난다 
        const response = await axios.post(
            "https://kapi.kakao.com/v1/payment/ready",
            {
                cid: "TC0ONETIME", // 테스트용 CID 만 넣어야한다 : TC0ONETIME
                partner_order_id: `order_${uniqueSuffix}`,
                partner_user_id: id,
                item_name,
                quantity: 1,
                total_amount,
                tax_free_amount: 0,
                approval_url: "http://localhost:3000/payment/success",
                cancel_url: "http://localhost:3000/payment/cancel",
                fail_url: "http://localhost:3000/payment/fail",
            },
            {
                headers: {
                    Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        console.log('qr-->', response.data);
        
        res.json(response.data);
    } catch (error) {
        console.error("QR 결제 요청 실패:", error);
        res.status(500).json(error.response.data);
    }    
    
}    



