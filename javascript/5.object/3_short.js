//


// let name = '사필안';
// let age = 20;
// const person = {
//     'name' : name ,  
//     'age' : age
// }


let name = '사필안';
let age = 20;
const person = { name , age };
// : 프로퍼티값('name')을 생략해도된다 value(name) 값은 생략안댐(프로퍼티랑 value 의 이름을 같은값으로 사용하고싶다 이럴떄만 삭제가능)    
console.log(person.name);
console.log(person.age);


let x = 0; 
let y =0;
const obj = {  x , y };
console.log(obj);


let fname= 'apple';
let emoji='🍎';
let color='red';
const fruit = {fname, emoji, color };
console.log(fruit);

console.clear();

/* 사원들의 정보를 입력받아, 객체로 반환하는 함수를 정의하라
사원의 정보 : 사번(empno) ,이름(ename), 나이(age) 
 function createObj (사원정보) {
    return {사원정보};
 }
*/
function createObj (empno, ename, age) {
    return {empno, ename, age};
}
console.log(createObj('1234' ,'사필안', 20 ));



// let emp1 = createObj('1234' ,'사필안', 20 );
// let emp2 = createObj('1464' ,'범무구', 20 ); //==>이렇게함녀 사원이 1000명이명 let 을 1000까지 해줘야하면 노답이니까
                                            //=>밑에처럼 배열에 넣는게 좋다(이건나중에배울거야)
 //=> 결과값  empno :1234 ,ename: ddd, age:20;


// [
//    {empno :'1234' ,ename: 'ddd', age:20;},
//    {empno :'1444' ,ename: 'ㄱㅁㅇ', age:25;},
// ]