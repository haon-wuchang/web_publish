/* 쥰내 어렵...
빌트인 클래스인 Promise를 통해 비동기식 처리를 진행한다.
new Promise((resolve,reject)=>{})

성공 실패(에러)를 알려주는게 resolve,reject 이다
promise1
    .then(성공한경우의콜백함수)
    .catch(실패했을때콜백함수);
*/


let promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve('굿');  
        reject('실패');
    },3000);
});



promise1 
    .then((result) => {console.log(`3초 경과`)}) //3초경과 후 큐에 들어가는 실행함수를 정의하는게 then 
    .catch((error) => {console.log(`에러에러`)});



