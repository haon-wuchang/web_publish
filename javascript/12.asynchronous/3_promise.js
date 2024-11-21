/* 쥰내 어렵...
빌트인 클래스인 Promise를 통해 비동기식 처리를 진행한다.
new Promise((resolve,reject)=>{})

성공 실패(에러)를 알려주는게 resolve,reject 이다
promise1
    .then(성공한경우의콜백함수)
    .catch(실패했을때콜백함수);
*/


let promise1 = new Promise((resolve,reject) => {
    //실행할 비동기식 로직을 넣으면 된다.(setTimeout 같은애들)
    setTimeout(() => {
        // resolve('굿');  //resolve랑 reject를 동시에 적용할수는 없음
        reject('실패');
    },3000);
});
//프로미스1이 백그라운드를 담당하는 창고관리자임, 
//그래서 얘가 결과가 잘나왓는지 에러가 뜨는지 잘 알려주겟다고한느게 프로미스1이야
//그래서 프로미스1한테 성공햇닝? 실패ㅐ햇닝?> 물어보는거지 
//(객체명은 내맘대로 적을수잇으니까 뭐 삐묵이라고 적으면 삐묵이 창고관리자가 되는거ㅣㅈ)
promise1 //API에 잇다가 3초경과 후 큐에 들어가있따가 이벤트루프가 이제 3초 너 나갈차례라고 알려주면 then이 reslove를 실행하는거다, 성공하면 haha가 나오겠지
    .then((result) => {console.log(`3초 경과`)}) //3초경과 후 큐에 들어가는 실행함수를 정의하는게 then 
    .catch((error) => {console.log(`에러에러`)});


//프로미스는 큐에 성공,실패가들어감  프로미스가 없는건 큐에 콜백함수로 들어가고

