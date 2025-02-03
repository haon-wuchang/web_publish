import express from 'express';
import router from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from 'cors';

const server = express();
const port = 9000;

/* 서버의 공통적인 작업 */
// 도메인끼리 연결작업을 해야함 cors
server.use(express.json());// express 로 작업한모든데이터를 json 으로 변환
server.use(express.urlencoded()); //한글 인코딩처리
server.use(cors());

// 서버의 요청처리를 위한 미들웨어 정의 

server.use('/',router);
server.use('/hello',helloRouter);
server.use('/employee',employeeRouter);





server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
