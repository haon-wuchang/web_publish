//단항 연산자 : ++ , -- , !(부정) , !! 
let a = 10;

console.log(++a); // 1증가 더하기  10 =11
console.log(a++); // 11을 출력후 1증가 (출력후 1증가가 실행되므로 11임)
console.log(a); // 12

let b=10;
console.log(--b); //1감소 후 플러스 10 =9
console.log(b--); // 9출력 후 1감소  =9 (출력후 1감소 실행되서 9임)
console.log(++b); //9
console.log(b++); //9
console.log(b); // 10


let flag = true;
console.log(flag);
console.log(!flag);
console.log(!!flag); // = !(!flag)



