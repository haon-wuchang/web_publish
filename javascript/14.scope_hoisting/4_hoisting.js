

//함수 호출
hoist1();
hoist2(); ///얘한테 에러가 뜸 

function hoist1(){
    console.log('호이스팅1');
}
const hoist2 = () => {
    console.log('호이스팅2');
}

// hoist2(); 




