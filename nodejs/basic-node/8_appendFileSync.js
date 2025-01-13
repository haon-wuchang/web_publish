// writeme.txt 파일에 hello 를 추가한 후 
// 파일의 내용을 출력하라

const fs = require('fs');
fs.appendFileSync('./writeme.txt','hello',(error)=> console.log(error));

let data = fs.readFileSync('./writeme.txt');
console.log(data.toString());

// append 는 데이터추가임 