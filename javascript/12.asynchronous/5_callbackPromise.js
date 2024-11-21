//비동기식 처리함수를 순차적으로 호출해서 실행하고자 할때 .
//5초 1초 호출하면 1초 다음에 5초가 큐에 들어가자나 나는 5초 1초 이 순으로 하고싶음
//이럴떄 유용한게 Promise 다
function step1(init) {
    let result = init + 1;
    // callback(result);
    return Promise.resolve(result); //step1이 성공햇는지 Promise가 알려준다
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
step1(0)            //then은 순차적으로 진행된다
    .then((result1) => {
        console.log(`result1 => ${result1}`);
        return step2(result1); //얘의 리턴값은 26번째줄의 then이 받는다
    })
    .then((result2) => {
         console.log(`result2 => ${result2}`);
        return step3(result2); //step3의 리턴값은 30번째줄의 then 이 받는다
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





