//비교연산자 : >, <, >=, <=, != , == , ===
//==> 비교한 실행결과 타입이 boolean 이다 (true,false 로 나옴)
//==> 제어문인 if문, while문에서 사용
/**
 * if(조건식: 3 > 2){
 *       true  
 * } else {
 *      flase
 * }
 */

console.log(3 > 2);
console.log(3 < 2);
console.log(3 >= 3);
console.log(3 <= 4);
console.log(3 == '4');   // 3 == 4 :여기서는 작은따옴표때고 봄
console.log(3 == 'a');   // 3 == 67(a가 가지고있는 아스키코드값?으로 비교함) 
console.log(3 === '4'); // 숫자(number) === 문자(string)
console.log(3 == 'a'); // 숫자(number) === 문자(string)
console.log(3 != 3);


//object 인경우 비교할떄
let obj1 = {
    name:"사필안"
};
let obj2 = {
    name:"범무구"
};
let obj3 = obj1;  //==>call by reference

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(`obj1: ${obj1}`); //==>얘네는 메모리힙까지는 못가서 이름을 출력못함 주소만 가져온거임 근데 주소는 노출되면안대서 걍 오브젝트 이케 나옴
console.log(`obj2: ${obj2}`);

console.log(obj1 == obj2);//주소의 값으로비교해서 폴스임
console.log(obj1 === obj2); //==>데이터타입과 주소의 값으로비교해서 폴스임
console.log(typeof obj1 === typeof obj2);//타입은 오브젝트로 같음

console.log(obj1 == obj3); //주소값같아서 트루
console.log(obj1 === obj3); 
console.log(typeof obj1 === typeof obj3);


console.log(obj1.name == obj2.name); //==>메모리힙의 데이터까지가져와서 비교함
