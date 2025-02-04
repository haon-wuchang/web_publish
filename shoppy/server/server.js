import express from 'express';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';

const server = express();
const port = 9000;

/* 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded()); 
server.use(cors());

// 서버의 요청처리를 위한 미들웨어 정의 //
//2.  formData 받아올 경로 만들기
server.use('/member',memberRouter);
//3. mvc 파일 만들어서 (react의 회원가입formData 받아오기)


server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
