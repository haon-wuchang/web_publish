//e-3. 컨트롤러 파일 작성
import * as repository from '../repository/productRepository.js';


// 상품 등록
export const registerProduct = async(req,res) => {
    console.log('req body==',req.body);   // e-4. formData 가 잘넘어왓는지 확인
    // 레파지토리 함수 호출 
    const result = await repository.registerProduct(req.body);
    res.json(result); 
    res.end();
}
