//논리연산자 : &&(and) , ||(or)(역슬래시키보트칸에 쉬프트 눌르면 나옴)
//==>숏컷연산이 가능해서 논리연산자를 사용 숏컷연산자는 조금더 간결하게 적는거?
/*

    (논리조건식1)  (논리조건식2) 를 비교해서 true flase 값을 가지고 진행

    (논리조건식1 true이고)  && (논리조건식2 true이면) = 결과값이 true 이다
    (논리조건식1 true이고)  && (논리조건식2 flase이면) = 결과값이 false 이다
    (논리조건식1 flase이고) && (논리조건식2 true이면) = 결과값이 false 이다
    (논리조건식1 flase이고) && (논리조건식2 flase이면) = 결과값이 false 이다

&& : 논리조건식1 flase 면 뒤에가 true,flase 상관없이 걍 flase 임   외웡
그래서 &&연산일때는 논리조건식1을 flase 값을 먼저주는게 좋다 (숏컷연산)
그러면 뒤에꺼는 아예 안보기 때문에 ㅃㄹ 진행 가능


    (논리조건식1 true이고)  || (논리조건식2 true이면) = 결과값이 true 이다
    (논리조건식1 true이고)  || (논리조건식2 flase이면) = 결과값이 true 이다
    (논리조건식1 flase이고) || (논리조건식2 true이면) = 결과값이 true 이다
    (논리조건식1 flase이고) || (논리조건식2 flase이면) = 결과값이 false 이다

     || 연산인 경우 앞에가 true 면 뒤에꺼도 무조건 true 이다
     그래서 논리조건식1을 true 값으로 먼저 주는게 좋다-->shortcut 연산

*/

let a = 1;
let b = 2;
// console.log((a<b) && (b>a));    //true && true
// console.log((a<b) && (b<a));    //true && false
// console.log((a>b) && (b>a));    //false && true
// console.log((a>b) && (b<a));    //false && false

// console.log((a<b) || (b>a));    //true && true
// console.log((a<b) || (b<a));    //true && false
// console.log((a>b) || (b>a));    //false && true
// console.log((a>b) || (b<a));    //false && false

// 임의의 숫자를 입력받아(1~9사이에 범위에 포함되면)  숫자 출력
let number = 11;
if((10> number) && (number >0)){
    console.log(`number는 사용가능한 숫자[${number}]입니다.`);
    
} else {
    console.log(`number를 다시 입력해주세요.`);
    
}

//if(0 < number < 10) 이렇게는 못씀

// 임의의 숫자를 입력받아(0보다 작거나 10보다 크면 )  숫자 출력
let number2 = 11;
if((10> number2) || (number2 <0)){
    console.log(`number2는 사용가능한 숫자[${number2}]입니다.`);
    
} else {
    console.log(`number를 다시 입력해주세요.`);
    
}