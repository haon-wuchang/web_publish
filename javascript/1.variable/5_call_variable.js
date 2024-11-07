//call by value  c= a; a가 기본변수이다  
//기본변수가 갖고잇는값을 c에 넣어주는거

let a = 100;
let b ='홍길동';
let c= a;

console.log(a);
console.log(b);
console.log(c);
console.log(a===c); 


// call by reference  let cc=aa;  a가 기본변수이다  
// 기본변수가 갖고잇는 주소를  c에 넣어주는거
let aa=[1,2,3];
let bb='홍길동';
let cc=aa;

console.log(aa);
console.log(bb);
console.log(cc);
console.log(aa===cc); 
console.log(typeof aa); //객체주소값을 가지고잇음
console.log(typeof cc);  //객체주소값을 가지고잇음

