//제어문 
// -조건문 : switch(조건) {case 실행결과: 실행문; break; ... defalut : 실행문;}
//조건식의 결과가 숫자나 문자로 나와야함 그 나온 숫자나 문자가 case 뒤에 나와야함

/** switch 의 형식
 * switch(숫자or문자) {
 *  case 숫자or문자 :
 *      실행문;
 *      break;
 *  case 숫자or문자 :
 *      실행문;
 *      break;   계속 반복
 * default :
 *      실행문;
 * }
 */


// 임의의 숫자를 입력받아 ...
// 숫자가 짝수이면 빨간사과
// 홀수이면 초록사과 를 출력하시오

let number = '102';
let result = undefined;
switch(number%2) {
    case 0 :
        result = '🍎';
        break;     //break 만날때까지 계속 실행되기때문에 꼭 적어랑
    case 1:
        result = '🍏';
        break;
    default :
        result = '해당 과일 없음';  //이거 나올확률이 0인데도불구하고 써서 코드를 길게해서 if 를 쓰는게 더낫당
}
console.log(result);

// 0:월요일 1:화요일  2:수요일
let usage = `[0]월요일, [1]화요일, [2]수요일`;
let day =1;
let resultDay = undefined;
switch(day){
    case  0: 
        resultDay='월요일'; break;
    case  1: 
        resultDay='화요일'; break;
    case  2: 
        resultDay='수요일'; break;
    default :
        console.log(`사용법 : ${usage}`);
}

if(!(resultDay===undefined)){
    console.log(`선택한 요일은 [${resultDay}]입니다 `); 
}

