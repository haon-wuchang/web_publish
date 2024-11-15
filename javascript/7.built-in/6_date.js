// console.log(Date.now());  //잘안씀 시스템의날짜를숫자로변환해서 나타냄
// console.log(new Date());  // 현재 사용하는 시스템의 날짜를 생성

let date = new Date ();  
console.log(date.getFullYear());
console.log(date.getMonth()+1); 
console.log(date.getDate());  

console.clear();

let year = date.getFullYear().toString();
let month =date.getMonth()+1;
let day =date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//2024년 11월 15일 =>String.concat 를 사용해서 출력해라
console.log(typeof year); //number 라서 string 으로 우선 바꿔야함
let display = year.concat('년 ',month,'월 ',day,'일');
console.log(display);

//2024년 11월 15일 => 템플릿 리터럴을 사용해서 출력해라
display=`${year}년 ${month}월 ${day}일 ${hour}시 ${minutes}분 ${seconds}초`;
console.log(display);


console.clear();


console.log(date.toLocaleString('ko-KR'));  
// console.log(date.toLocaleString('en-US'));//미국버전

console.log(date.toLocaleDateString('ko-KR')); 
// console.log(date.toLocaleDateString('en-US')); 



