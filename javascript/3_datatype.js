/**
 * primitive 데이터 타입
 * -정수형(integer) :100, 1 , ..
 *  실수형(float, double) : 0.1  , 1.57 ...
 * -문자형(character) : '' , "" 
 * -불린형(boolean) : true, false
 *  ex) let flag = true;   ==> flag = true값 지정 
 * 
 * 
 * reference 데이터 타입 : 데이터가 큼 그래서 데이터를 가지고있는게 아니라 
 * 그 데이터 주소를 알려줌
 * -객체형(object) : 배열, JSON ... 
 * 배열: [ ]
 * JSON : { }
 */

// 정수형 변수 선언 
let number = 100;
number = 100.1 ; 
console.log(number);


// 실수형 변수 선언
let fnumber =10.234;
fnumber = 200; /**let 이라 첨에 실수 넣고 낟중에 데이터값을 정수로 바꿔도 출력이 된다 */
console.log(fnumber);


// 불린형 변수 선언
let flag=true;  //  !(=not) !는 반댓값으로 전환할떄 사용
let =!true;
// let =!true;  =  let flagTest=!flag;  같은 의미임
let flagTest=!flag;  



// 객체형 변수 선언
let nameList = ['필리스','리노','아이엔'];
console.log(nameList);

// primitive ,reference 데이터 타입의 초기화
let address = undefined; 
/**
 * primitive 일때 :어드레스는 쓰고싶은데 데이터값을 정하지는 못할떄  ㅗ초기값을 undefined 사용 */

let addressList = null;
/**
 *  * reference : 어드레스리스트는 쓰고싶은데데이터값을 정하지는 못했을떄 ㅗ초기값을 undefined 사용 */

// 데이터 타입 비교 명령어 : typeOf
let x = 10;  //숫자
let xx = 10;//숫자
let y = '10'; //문자
let obj = {name:'삐뮥'};

console.log(x, typeof x);
console.log(xx, typeof xx);
console.log(y, typeof y);
console.log(obj, typeof obj);

console.log(x == y);  //저장된 값만  비교한 결과 라 둘다 결과는 10이라 true 나옴
console.log(x === xx);  
console.log(x === y);  //저장된 값과 데이터 타입까지 비교한 결과 라서 flase 나온거


