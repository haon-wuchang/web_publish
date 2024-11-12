

function add(){
    return 1+2;
}
console.log(add());
//일반 함수 표현식
let add2 = function() {     //let add2= 를 지우면 에러가뜬다
    return 1+2;
}

//화살표 함수 표현식 !!!!
// let add3 = () => {       //let add3= 지우면 에러는 안뜬다
//     return 1+1;
// }

let add3 = () => 1+1;

let add4 = (a,b) => a+b;
let add5 = (a,b,c,) => {
     if(a>0 && b>0 && c>0){
    console.log(a+b+c);
} else{
    console.log(`a,b,c는 0보다 커야합니다.`);
    }
}
console.log(add4(2,2));
add5(1,2,3);


console.log(add2());
console.log(add3());  //함수호출할떄는 () 적어줘야댕

