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
    // 얘 경로를 /signup 으로 안하는 이유가 /signup 의 하위페이지는 따로 업는데 구지 use 로 할 필요가 없자나
    // 그래서 /member 라는 걸 만들고 하위로 /login, /signup 을 넣을거임 
server.use('/member',memberRouter);
//3. mvc 파일 만들어서 (react의 회원가입formData 받아오기)
    // 로그인,회원가입은 db에서 같은 테이블 사용






server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
