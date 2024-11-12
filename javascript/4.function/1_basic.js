/*
    함수정의할떄 :
    function 함수명(파라미터=매개변수{
        실행로직;
    }
    
    함수 실행할떄 :  함수의 이름을 가지고 호출
    함수명(파라미터의 형식을 맞춰서작성);
    


    로직을분리해서 해당파일이 아닌 다른 여려곳에서 공통적으로 사용하는경우에 함수를 사용한다
    react 에서도 쓰닊 ㅏ 함수 중용ㅇ행

    function=객체 임 ==>저장되는곳 메모리힙 임
*/

// 내장(built-in)함수  : 자주 사용하는 기능을 함수로 구현하여 엔진에서 제공함
//    -parseInt(문자열); ==> 파라미터의 문자열을 숫자로 변환하는 함수


//내장 함수 parseInt() 호출
let a ='100';
console.log(a, typeof a);
console.log(parseInt(a)+100);
console.log(parseInt(a), typeof parseInt(a));



// 두 개의 숫자를 입력받아 합계를 출력하는 로직을 작성

let num1=10;
let num2=20;
console.log(`sum => ${num1+num2}`);

// 위에꺼를 함수로 작성하세요

function add(a,b){
    let n1=parseInt(a);
    let n2=parseInt(b);

    console.log(`sum => ${n1+n2}`);
}  //호출하기전까지는 메모리힙에 저장되어잇음
//a,b 는 var a var b 이케 들어가는거임 이거를 let a 이렇게는 작성하면 안됑
// var a= 호출시 입력되는값

//함수호출 위치에 결과값 출력
add(2,4);
add('2','4');  //이케하면 문자열로 결과값나오니까 위에서 pasreInt 써줘서 숫자로 바꿔여댕

// 두 수의 차를 구하라(단 결과는 음수가 출력되지 않도록 한다)
// a > b 인 경우 결과값 출력

function min(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    if(a>=b){
        console.log(`min => ${a-b}`);
    } else {
        console.log(`a값은 b값 보다 커야 합니다`);    
    }
}

min(90,555);
min('90','55');
