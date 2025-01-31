// express 이용해서 서버만들기

//1.  익스프레스 라이브러리 호출
import express from 'express';  // 얘가 디폴트얌 ( require 는 예전방식임)
// const express = require('express'); // = import express from 경로 ;  얘와 동일한거임(node에서는 require 로 받는거양)

import helloRouter from './router/helloRouter.js'; // 9.
import productRouter from './router/productRouter.js';

const server = express(); // => express 서버 생성됨

// 2-1.포트 별도로 설정하기 (2번부분 내용이 길어지면 맨밑까지 내려서 포트번호 바꿔야대는데 귀찮자나)
const port = 9000;

/* 6. 익스프레스 서버의 요청과 응답을 처리하는 미들웨어 
        요청/응답 메소드 : GET, POST, PUT ,DELETE 
            - 로그인, 회원가입 부분에서 사용
        문법 : server.get('브라우저가요청하는경로',(req,res)=>{});   req res 순서 바꾸면 에러남 req 먼저 써야댐
                res 는 브라우저에 응답을 해주는 객체임
        MVC패턴을 적용하여 작업을 분리시킴 
        - M : repository , V : router , C : controller 로 바꿔서 사용할거임

*/
// server.get('/hello',(req,res)=>{
//     console.log('hello node');   
//     res.send('<h1>하아아아ㅏ</h1>'); 
//     // 브라우저는 html 코드를 읽을수잇어서 여기에 태그사용가능
// });

//9-1.
// server.get('/hello',정의한라우터이름);
server.get('/hello',helloRouter);
server.get('/hello/:id', helloRouter);

//7. 콜백함수 부분이 쥰내길면 보기힘드니까 따로 뺴서 작업함 => MVC패턴을 적용하여 작업을 분리시킴







server.get('/product/all',productRouter);
server.get('/product/:pname',productRouter);













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




/* 2. 서버는 항상 켜져잇어야됨 (대기상태로 ) listen 은 보통 파일 맨밑부분에 작성함용*/
server.listen(port,()=>{
    console.log(`서버 대기중 ${port}`);
    
}); // => 익스프레스 서버 대기상태 : 포트설정 및 메세지출력
    // server.listen([port[, host[, backlog]]][, callback])


// .4. cmder 가서 서버까지 경로 이동 후 nodemon server.js

// 5. 서버 켜져잇는지 확인하려고 listen 에 콜백함수 사용하기 console.log('서버 대기중');












// 이름없는함수이고 그자리에서 한번만 실행하고 종료, 다른곳에서 호출불가 = 콜백함수 외워랑



