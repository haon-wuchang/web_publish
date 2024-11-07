//선언문과 표현식(expressions)에 대한 차이


/**
 *
 *  1;  ==> 이런애들은 숫자만 들어가고 한줄 다 차지하면 리터럴 형태라고함(귿ㄴ데 이런형태로 쓰진않음):그래서 쟤는 숫자리터럴표현식
 'hong'; --> 문자리터럴 표현식
 1+1; ==>산술연산 표현식
    함수명(); =>ex)  call();  ==>함수 표현식
    c =100;  ==>할당      ==>할당 표현식
    let a;   ==> 변수 선언문
*/


let a;   //==>선언문  let 은 선언자 a는 변수
let b=100; //==>표현식    b는 100이라는 값을 화면에 표현해서 표현식임
let c=''; //==> 표현식임 빈공간이라는 값이 잇는거임
let d =undefined; //==>선언문 d 변수를 선언하는데 값은 아직 없어용
let e=null; //선언문

console.log(a);  //값이 없어서 undefined 가 나온거임 
console.log(b);
console.log(c); //c는 공백이라는 값이 잇어서 undefined이 아니라 공백으로 값이나옴
console.log(d);
console.log(e);


