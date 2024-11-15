
// Number class
let a = '123'; 
if(typeof a === 'string') a = parseInt(a);
if(a===123)console.log(a);
if(Number('123') === 123) console.log(`a=>${a}`);  
//문자로들어오는값을 자동으로 숫자로 변환해줌

// let maxValue = Number.MAX_VALUE;
// let minValue = Number.MIN_VALUE;
// console.log(maxValue);
// console.log(minValue);

// let x = 100;
// let y = new Number(100); 
// console.log(typeof x);
// console.log(typeof y);
// console.log(x === y);  /
// console.log(x === y.valueOf());   

//String class + 템플릿리터럴
let str = 'hello';
let str2= new String('hello'); 
console.log(typeof str);
console.log(typeof str2);
console.log(str === str2);
console.log(str === str2.valueOf()); 

// //Boolean class
let flag= true;
let flag2 =new Boolean(true);
console.log(typeof flag);
console.log(typeof flag2);
console.log(flag===flag2);
console.log(flag===flag2.valueOf());

