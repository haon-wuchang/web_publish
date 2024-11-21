//비동기식 처리함수를 순차적으로 호출해서 실행하고자 할때 .
//5초 1초 호출하면 1초 다음에 5초가 큐에 들어가자나 나는 5초 1초 이 순으로 하고싶음
//이럴떄 유용한게 Promise 다
function step1(init,callback) {
    let result = init + 1;
    callback(result);
}
function step2(init,callback) {
    let result = init + 2;
    callback(result);
}
function step3(init,callback) {
    let result = init + 3;
    callback(result);
}

step1(0, (result1) => {
    console.log(`result1 => ${result1}`);
    step2(result1,(result2) =>{
        console.log(`result2 => ${result2}`);
        step3(result2, (result3) => {
            console.log(`result3 => ${result3}`);
        })
    });
});
     //step1 이 정상정으로 돌아가야 step2가 돌아간다.






