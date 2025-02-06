import express from 'express';
import cors from 'cors';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import path from 'path'; //12.

const server = express();
const port = 9000;

/* 서버의 공통적인 작업 */
server.use(express.json());
server.use(express.urlencoded()); 
server.use(cors());

// 6-1. 업로드 파일 호출 경로 추가 - 이미지 호출
server.use('/upload_files',express.static(path.join('upload_files'))); // => 이미지 저장폴더 연결
    // path.join(이미지저장폴더명)
    // 앞에잇는 경로는 url 로 호출할때의 경로임 이거도 내가 다른거로 바꿔도댕(밑에 use 에 쓴 경로이름과 같은경로이름 주면안댐! )


// 서버의 요청처리를 위한 미들웨어 정의 //
server.use('/member',memberRouter);

server.use('/uploads2',uploadRouter); //6.

server.listen(port,()=>{
    console.log('서버실행ㅈ유ㅠ');
    
});
