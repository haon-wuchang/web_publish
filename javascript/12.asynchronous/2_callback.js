/*
비동기식처리방식에서 callback함수 호출하는 방식을 봅시다=react에서도 동일하다
*/
//runInDelay(callback,dalay시간)
function runInDelay(callback,seconds){
    setTimeout(callback,seconds);
}

runInDelay(function(){console.log(`타이머 3초 경과`)},3000);
runInDelay(() => {console.log(`타이머 1초 경과`)},1000);
console.log(`프로그램종료`);

//이거 잘정리행!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//백그라운드에 3초짜리 저장하고 3초를 기다리는게아니라 밑에잇는 1초짜리 저장 그 후 창고에서 1초경과해서
// 1초짜리는 큐에들어가고 3초가 3초지나고 나중에 큐에 들어가게됨
// 루프가 1초먼저 처리하고 3초 처리함

/*결과값
프로그램종료
타이머 1초 경과
타이머 3초 경과
*/

