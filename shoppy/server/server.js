import express from 'express';
import router from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';

const server = express();
const port = 9000;

// 서버의 요청처리를 위한 미들웨어 정의 

server.use('/',router);
server.use('/hello',helloRouter);
server.use('/employee',employeeRouter);





server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
