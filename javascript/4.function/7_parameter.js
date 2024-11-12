//parameter(=argument, 매개변수) : 함수의 값을 전달하는 인자 이다

function add(a,b) {   
    return a+b;
}
let sum=add2(4,6);
console.log(sum);

//파라미터를 안적으면 값이 10으로만 계쏙 고정되기떄문에 다른곳에서 사용하기 힘들다.
// function add2() {   
//     return 4+6;
// }
// let sum=add2();
// console.log(sum);


//스프레드 연산자(spread operator= 전개 구문) :  ...배열명      => 파라미터나 배열에 많은 값을 넣을때사용
function add2(...numbers) {   
    return numbers;
}
let sum2=add2(4,6,2343,663,3333,222,5,166,323,35,32,234,236);
console.log(`${sum2}`);


function add3(a,b, ...datas){
    console.log(a);
    console.log(b);
    console.log(datas);
}
add3(1,2,3,4,5,6,7);

//함수 호출 칸은 이케 다 모아놩






