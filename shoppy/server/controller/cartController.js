import * as repository from '../repository/cartRepository.js';

//장바구니 추가
export const addCart = async (req,res) => {
    // console.log('req.body==',req.body);  
    
    const result = await repository.addCart(req.body);
    res.json(result);
    res.end();
}


//장바구니 전체 조회
export const getItems = async(req,res) => {
    const result = await repository.getItems(req.body);  
    res.json(result);
    res.end();
}


// 장바구니 수량 조회
export const getCount = async(req,res) => {
    const result = await repository.getCount(req.body);
    res.json(result);
    res.end();
}

//3-8.
// 장바구니 같은상품,같은사이즈인 경우 수량 업데이트 
export const updateQty = async(req,res) => {
    
    const result = await repository.updateQty(req.body);
    res.json(result);
    res.end();
}