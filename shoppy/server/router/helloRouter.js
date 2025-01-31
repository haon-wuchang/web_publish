// 8. 

import express from 'express';
// import {getHello,getHelloParam } as controller from '../controller/helloController.js'; // 11.
import * as controller from '../controller/helloController.js'; // 11.
// 함수 여러개일때는 * 로 대체할수 있음 as 는 함수명 바꾸는거고 / 호출할때는 바꾼명.함수명

const router = express.Router(); 

router.get('/hello',controller.getHello);  
// router.get('/',controller.getHello);  // 222. 생략이 가능한데 server.js 에서 use 로 사용한애들만 /hello 생략가능 
// 근데 use 로 사용한애들은 router 에서 get 으로만 받아올수 잇는거?💦

router.get('/hello/:id',controller.getHelloParam);
// router.get('/:id',getHelloParam); // 222.

// 이케해도되고 매서드체이닝으로
// router  
//     .get('/hello',controller.getHello)
//     .get('/hello/:id',controller.getHelloParam); //이렇게 해도됨




export default router;



// 라우터는 컨트롤러로 넘기기만 하고 끝임 ( 콜백함수 업슴 !!!!!!!!!!!!!!!)
