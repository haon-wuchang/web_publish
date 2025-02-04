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
//1.
server.use('/member',memberRouter);
//3. mvc 파일 만들기
    // 로그인,회원가입은 db에서 같은 테이블 사용

//  회원가입의formData 받아오기




server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
