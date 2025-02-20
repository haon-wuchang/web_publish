import axios from 'axios';

//1-6.
export const paymentKakaoPay = async(req, res) => {
    console.log('ㅋ알ㅋㅇ라',req.body); //1-7. 우선 잘찍는지 확인

    try {
        console.log(req.body);
        const {id, item_name, total_price} = req.body;  
        const KAKAO_ADMIN_KEY = "f4b70b66e258ae0e3ef085288f144608";
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        
        const response = await axios.post(
            "https://kapi.kakao.com/v1/payment/ready",
            {
                cid: "TC0ONETIME", // 테스트용 CID : TC0ONETIME
                partner_order_id: `order_${uniqueSuffix}`,
                partner_user_id: id,
                item_name,
                quantity: 1,
                total_price,
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