// iterable object 
//Map : key-value 쌍, 얘는key로 value 값을 뺼수잇어서 따로 인덱스가 없다
// - set has get keys values entries clear 등
//Set : value만  - add get has delete values clear 등
// :중복없이데이터넣어줌 순서상관ㄴ없이 막꺼냄ㅇ

// 1. spread연산자
function display(...numbers){
    for(number of numbers) console.log(number); 
}
display(1,2);
display(1,2,3,4,5);

const hong = {
    name : '홍길동',
    age : 40
};

const hongUpdate = {
    ...hong,
    address : '숲속'
};

console.log(hongUpdate);


// 2. 구조분해할당 destructuring Object
const getObject = () => {
    return{name: '필릭스', age:25};
}
const {name,age} = getObject();
// { } 이거는 return에 있는 괄호임
console.log(name, age);


const getObject2 = () => {
    return [1,2,3];
}
const [n1,n2,n3] = getObject2();
console.log(n1,n2,n3);

// 3. forEach 

const numberList = [1,2,3];  
numberList.forEach((element,index) => console.log(element,index));  




const myMap = new Map();
myMap.set('name','felix');
myMap.set('age','25');
myMap.forEach((value,key) => console.log(key,value)); 
//forEach에서 다 한줄이라 return {} 지운거양!!!!!


const mySet = new Set();
mySet.add('이용복');
mySet.add('이용복');
mySet.add('황현진');
console.log(mySet);
mySet.forEach((value,key)=>console.log(value,key));  









