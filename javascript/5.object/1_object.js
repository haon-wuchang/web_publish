
/*
let a = 10; 변수a의 데이터값(10)을 리터럴 이라고 한다
let a=[1,2,3]; 얘는 리터럴 아님용


*/

const obj = {   // obj의 주소값은 바꿀수 없지만(재할당불가) name인 사필안은 다른이름으로 변경 ㄱㄴ
    name : '사필안',
    age : 28
}
//1. obj 데이터 출력
console.log(obj);
console.log(obj.name, typeof obj.name);   
console.log(obj.age, typeof obj.age);   

//2.name을 수정해라

obj.name = '범무구';
console.log(obj.name);
// obj = '111'; //=> 이거는 불가능 이건 obj의 주소를 바꾸는거라서

//3. age를 삭제해라
delete obj.age;
console.log(obj);

