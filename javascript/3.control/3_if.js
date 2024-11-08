// 임의의 숫자를 입력받아 ...
// 숫자가 짝수이면 빨간사과
// 홀수이면 초록사과 를 출력하시오
//1. 숫자 입력받기
//2.입력받은 숫자(짝 홀) 체크하기
//3.체크결과에 따라 값 입력
//5. 값 출력


let number = "212";
let result =undefined;
if(number%2) result = '🍏';
 //결과값이 true.flase 로 딱 떨어질때는 비교(===)안해도 된다
 //0이면 flase 1이면 true
else result='🍎';
console.log(result);


//위의 코드를 삼항연산자로 바꿔라
let choice = undefined;
(!(number%2)) ? choice = '🍎': choice='🍏';
//number%2===0에서 ===0을 지우면 true=1 일떄 빨강이 나오게된다
//그래서 ===0 지우려면 앞에 not 인 ! 붙이면 된다
console.log(choice);


//삼항연산자를 사용하여 2줄로 코드를 만들어라
let emoji = (!(number%2)) ? '🍎': '🍏';
console.log(emoji);

//코드는 짧게 적는게 효율적이다.