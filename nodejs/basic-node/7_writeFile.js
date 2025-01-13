const fs = require('fs');
// console.log(fs);
// fs.writeFile('파일경로',데이터, 콜백함수);
fs.writeFileSync('./writeme3.txt','민초 살짝 먹고싶을지도',(err)=> 
        console.log('에러욤'));   
// 읽어올 데이터가 없어서 인자에 에러만 들어간다
// writeFile 은 비동기로 빼고 밑에 readFile 먼저 실행해서 출력결과가 민초먼저나오고 나중에 에러가 나온다

const data = fs.readFileSync('./writeme3.txt');
console.log(data.toString());







