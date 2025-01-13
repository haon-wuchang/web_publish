const express = require('express');
const server = express();

/* GET / POST 방식으로 요청이 들어오는 처리를 여기 자리에 나열한다

 브라우저가 접속하는 path(경로) : http://localhost:8080/ 
 이면 path : /(root) */
 server.get('/', (req,res)=>{
    res.send('<h1>express 서버에서 전송합니다</h1>'); 
});   
// 브라우저는 html 로 데이터를 받으니까 안에 내용은 태그를 사용해서 내용을 작성한다
 /* 

 /*브라우저가 접속하는 path(경로) : http://localhost:8080/test  
 이면 path : /test 임 */
server.get('/test',(req,res)=>{
    res.send('<h1>퓨퓨퓨퓨 </h1>');
    console.log('/test 전송완료');
});

//브라우저가 접속하는 path(경로) : http://localhost:8080/param/홍길동 
//이면 path : /param 임    홍길동 = 데이터임 .path 아님!!!
server.get('/param/:name',(req,res)=>{
//server.get('/param/:data',(req,res)=>{   
    console.log(req);  
    // 이케쳐서 cmder 보면 params { name : 홍길동 } 이케 들어가잇음 그래서 로그찍을때 경로를 저렇게 준거임
   console.log('name==>',req.params.name);
    res.send(`${req.params.name} 전송완료`);
});



 /*server.get();  // app.get(path, callback [, callback ...])  | url 로 넘어가는건 다 get 방식임
 server.post();
 server.use(); // get, post 어느건지 모를때는 use 를 사용한다
*/



// app.listen([port[, host[, backlog] ] ] [, callback])
server.listen(8080,()=>{console.log('서버실행중')});


 
