import express from 'express';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js';
import cartRouter from './router/cartRouter.js';
import path from 'path'; 

const server = express();
const port = 9000;

/* 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded()); 
server.use(cors());

//  업로드 파일 호출 경로 추가 - 이미지 호출
server.use('/upload_files',express.static(path.join('upload_files'))); // => 이미지 저장폴더 연결
    // path.join(이미지저장폴더명)


// 서버의 요청처리를 위한 미들웨어 정의 //
server.use('/member',memberRouter);
server.use('/uploads',uploadRouter);
server.use('/product',productRouter);  
server.use('/cart',cartRouter);  //c. 서버 만들고 mvc 파일만들기

server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
