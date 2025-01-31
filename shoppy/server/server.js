
import express from 'express';  // 얘가 디폴트얌 ( require 는 예전방식임)
// const express = require('express'); // = import express from 경로 ;  얘와 동일한거임(node에서는 require 로 받는거양)

import helloRouter from './router/helloRouter.js'; // 9.
import productRouter from './router/productRouter.js';

const server = express(); // => express 서버 생성됨

const port = 9000;

/* 6. 익스프레스 서버의 요청과 응답을 처리하는 미들웨어 */

//     // res.send() 브라우저는 html 코드를 읽을수잇어서 여기에 태그사용가능


//9-1.
server.get('/hello',helloRouter);
server.get('/hello/:id', helloRouter);

// server.use('/hello',helloRouter); // 111. hello 로 시작하는 주소는 모두 helloRouter 로 맵핑시킴







// use 쓰면 router 파일에서 대표경로는 생략하고 / 만 써야댐 !!!! /product 쓰면 얘는 /product/product 로 인식함
server.use('/product',productRouter);
// server.get('/product/all',productRouter);
// server.get('/product/:pname',productRouter);













// server.get('/test',(req,res)=>{
//     res.send('helooo testsstst'); // send 함수를 사용해서 브라우저에 해당 내용 출력함
// });

// // server.get('/test/hong',(req,res)=>{
// //     res.send('hi hong');
// // });
// // server.get('/test/kim',(req,res)=>{
// //     res.send('hi kim');
// // });
// // 이케 여러개 나오게하려면 /test/까지만 주소이고 뒤에 hong kim 이 출력할애들이니까
// // react pid 받아온것처럼 하면댕
// // server.get('/test/:변수명',(req,res)=>{
// //     res.send('김김');
// // });
// server.get('/test/:names',(req,res)=>{  // => const names = 'kim';  이 주소는 요청하는거라서 req객체가 이 주소를 관리한댐
//     res.send(`hihihihihihi ${req.params.names}`); // req 가 주소값관리하니까 names 가져오려고 req.params.변수명
// });




server.listen(port,()=>{
    console.log(`서버 대기중 ${port}`);
    
}); // => 익스프레스 서버 대기상태 : 포트설정 및 메세지출력
    // server.listen([port[, host[, backlog]]][, callback])















// 이름없는함수이고 그자리에서 한번만 실행하고 종료, 다른곳에서 호출불가 = 콜백함수 외워랑



