//Math 클래스 : 
// 
//!!인 애들은 잘쓰는거니까 외웡


let num1 = 123.756;
console.log(num1);
console.log(`Math.abs(num1) = ${Math.abs(num1)}`); 


console.log(`Math.floor(num1) = ${Math.floor(num1)}`); 
// console.log(`Math.trunc(num1) = ${Math.trunc(num1,1)}`);  Math.trunc(); 절삭할 자릿수를 넣을수있음 근데 이건 SQL에서 쓰는거랭 자바스크립ㅇ트는 우선안ㄷ매


let num2 = 1.537 ;
let result = Number(num2.toPrecision(3))
console.log(result);


console.log(`Math.round(num1) = ${Math.round(num1)}`); 

//
console.log(`Math.max(1,2,3,4,5) = ${Math.max(1,2,3,4,5)}`); 
console.log(`Math.min(1,2,3,4,5) = ${Math.min(1,2,3,4,5)}`); 


console.log(`Math.random() = ${Math.random()}`); 
//1~100사이의 숫자를 랜덤하게 출력하라
let rnum = Math.floor(Math.random()*100 + 1);  //0.9656464 이렇게 나오는경우도있어서 1더해줌
console.log(rnum);


