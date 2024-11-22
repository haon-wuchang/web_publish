
function step1(init) {
    let result = init + 1;
    // callback(result);
    return Promise.resolve(result); 
}
function step2(init) {
    let result = init + 2;
    // callback(result);
    return Promise.resolve(result);
    // return Promise.reject('error');
}
function step3(init) {
    let result = init + 3;
    // callback(result);
    return Promise.resolve(result);
}

//Promise 호출
step1(0)       
    .then((result1) => {
        console.log(`result1 => ${result1}`);  //값 1
        return step2(result1); // 출력된 값1을 setp2(1) 이렇게 반환해 준다 얘의 반환값을 두번째의 then이 받게된다.
    })
    .then((result2) => {
         console.log(`result2 => ${result2}`);
        return step3(result2); //step3의 리턴값은 29번째줄의 then 이 받는다
    })
    .then((result3) => {
        console.log(`result3 => ${result3}`);
    })
    .catch((error) => console.log(`error발생`))



// step1(0, (result1) => {
//     console.log(`result1 => ${result1}`);
//     step2(result1,(result2) =>{
//         console.log(`result2 => ${result2}`);
//         step3(result2, (result3) => {
//             console.log(`result3 => ${result3}`);
//         })
//     });
// });





