import express from 'express';
import testRouter from './router/testRouter.js';

const app = express();
const port = 9000;

// 요청 처리하는 미들웨어 부분 //
//  '/test' ->  브라우저에 hello test 출력 후 종료
app.use('/test',testRouter);












app.listen(port,()=>{
    console.log('서버실행중');
    
});


