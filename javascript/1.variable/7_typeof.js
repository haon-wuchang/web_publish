
//typeof operand, typeof(operand,operand ...)


let name='하온';
let age=25;
let a=100;
a=0.1;
a='haha';
a=true;
//이케 a 값이 쥰내많아서 타입이 뭔지 모를떄 타입오프쓰면 맨마지막애꺼알려죵




console.log(typeof 100); //100은 넘버타입
console.log(typeof '자바스크립트'); //string이 문자타입임
console.log(typeof name);
console.log(typeof age);
console.log(typeof a);

console.log(typeof a === typeof age); 
console.log(typeof (a, age,name)); //이케 타입 확인할수도잇음 여려개중에 맨마지막거만 나옴
console.log(typeof(a,b,c) === typeof(age));
//이케오면 여러개중에 맨마지막인 c랑 age를 비교하는거임

//22..24  번째 줄 애들 둘다 같은내용임 작성방식이 다른거 둘중 하나 아무거나쓰ㅕ면댕
