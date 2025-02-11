import * as repository from '../repository/productRepository.js';


// 상품 등록
export const registerProduct = async(req,res) => {
    console.log('req body==',req.body);   
    // 레파지토리 함수 호출 
    const result = await repository.registerProduct(req.body);
    res.json(result); 
    res.end();
}

export const getList = async(req,res) => {
    const result = await repository.getList();
    res.json(result);
    res.end();
}

// 상품 상세 정보 조회
//1-4. 컨트롤러 만들기 
export const getProduct = async(req,res) => {  //1-4-0.req.body 로 넘기면 {"pid":pid} 이렇게 넘어감
    const result = await repository.getProduct(req.body.pid);  //1-4-0. pid 하나만 넘어왓으니꺠 이케 변수로 보내면댐 pid=7 이렇게 넘어감
    res.json(result);
    res.end();
}