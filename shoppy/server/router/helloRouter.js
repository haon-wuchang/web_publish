// 8. 

import express from 'express';
// import {getHello,getHelloParam } as controller from '../controller/helloController.js'; // 11.
import * as controller from '../controller/helloController.js'; // 11.
// 함수 여러개일때는 * 로 대체할수 있음 as 는 함수명 바꾸는거고 / 호출할때는 바꾼명.함수명

const router = express.Router();  // 변수선언된 애들은 파일맨밑에서 export default 사용

// router.get('라우팅경로', 연동하는컨트롤러 이름);
router.get('/hello',controller.getHello);  // 11-1.   get 으로 넘어오면 get 으로 받기
// // router.get('/',getHello);  // 

router.get('/hello/:id',controller.getHelloParam);
// router.get('/:id',getHelloParam);

// 이케해도되고 매서드체이닝으로
// router  
//     .get('/hello',controller.getHello)
//     .get('/hello/:id',controller.getHelloParam); //이렇게 해도됨




export default router;



// 라우터는 컨트롤러로 넘기기만 하고 끝임 ( 콜백함수 업슴 !!!!!!!!!!!!!!!)
