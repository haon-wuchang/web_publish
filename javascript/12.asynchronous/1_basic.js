/*
    비동기
*/
function a () {
    c();  //return address =복귀주소
    console.log(`a function`);
    
}
function b () {
    setTimeout(() => {console.log(`1초후 setTimeout 함수 실행`)},1000);
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

*/
