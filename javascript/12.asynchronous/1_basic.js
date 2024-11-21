/*
    비동기
*/
function a () {
    c();  //return address =복귀주소
    console.log(`a function`);
    
}
function b () {
    // setTimeout(함수,딜레이시간ms);   //setTimeout은 parseInt와 같은 전역함수임 
    // setTimeout(function(){} ,1000); //   에로우형식으로 쓰거냐 그냥 일반함수형식으로 써도상관없움
    setTimeout(() => {console.log(`1초후 setTimeout 함수 실행`)},1000); //   1000=1초
    console.log(`b function`);
    
}
function c () {
    b();
    console.log(`c function`);
    
}

a();
/*결과값
b function
c function
a function
1초후 setTimeout 함수 실행

setTimeout은 비동기식으로처리하는함수 라 0초로 줘도 맨 마지막에 출력이된다.
*/
