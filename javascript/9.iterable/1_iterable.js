// iterable(이터러블) object : 
//- for...of, ...(spread연산자=전개구문) , 구조분해할당(=destructing object) : 전개구문에 잇는데이터들을 분해해서 자동으로 변수에 할당해줌


//'hello javascript~! ' 를 출력하라
const text = new String('hello javascript~!');
// for(데이터를 넣는부분  of 출력할객체 ){
// element 앞에는var 임 element는 해당 for문안에서만 사용 ㄱㄴ
// }
for(let element of text){
    console.log(`element = ${element}`);   
}


// [1,2,3,4,5] 출력
const numbers = [1,2,3,4,5];
for(let num of numbers)console.log(num);
    

// Number 클래스 생성 및 실행
const numberClass = new Number(12345);
for(n of numberClass){
    console.log(n);
} // 이거는 에러발생
//TypeError: numberClass is not iterable -> numberClass는 순회가 안되는애라 for of 사용이안됨,모든클래스에 for of 가 적용되는건아니다


