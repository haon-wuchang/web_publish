// path : 내장모듈임
const path = require('path');// 내장객체 호출하는게 require 양

console.log(path.sep);   // path.sep => 파일경로를 구분하는 기호? 를 알려줌 

const string = __filename;  // __filename => 현재 실행중인 파일의 경로 
console.log(string);

// path.dirname() => 현재실행중인 파일의 경로중 디렉토리까지만 출력 (파일이름 포함 안됨)
console.log(path.dirname(string));
// path.extname() => 현재실행중인 파일의 확장자명만 출력
console.log(path.extname(string));
// path.basename() => 현재실행중인 파일의 파일명만 출력 ( 파일명 + 확장자 )
console.log(path.basename(string));
// 현재실행중인 파일명만 출력 (파일명 만)
console.log(path.basename(string, path.extname(string)));

//path.join() => 기존의 경로에 새로운 경로 추가
console.log(path.dirname(string),path.join('/images'));


