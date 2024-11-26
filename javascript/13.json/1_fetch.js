

//일별 박스오피스 정보를 코비스에서 가져오라
let key =`82f82f55000c3a4465aa5bceb5a65f72`;
let target = `20241121`;
let url =`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// 1. response 객체 살펴보기
fetch(url)
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});

console.log(`---------확인용-------------------`);

    //fetch =비동기임
    //fetch를 실행하면 reponse로 결과가 문자열로 나오게된다


// 2. JSON 데이터 가져오기
// let result =  fetch(url); //JSON객체가 문자열 데이터타입으로 가져옴
// let jsonData =  result.json(); // .json() 함수를 통해 JSON객체 타입으로 변환을시킨다
// console.log(jsonData);
//이렇게만 하면 에러가발생한다
// TypeError: result.json is not a function

// let result = fetch(url) 은 fetch가 비동기라서 우선 백그라운드에 ㅇ들어가잇음
//그후 let jsonData = result,sjon() 이 실행되는데
//fetch가 아직 백그라운드에잇어서 얘의 값을 json으로 받아올수없음
// 그래서 타입에러 발생


// 3. await 순서를 지켜서 코드를 실행할 수 있도록 await 를 붙여서 실행한다.
//await 쓰면 얘가 실행될때까지 다음줄 먼저 실행하지않고 기다리는거임 
let result = await fetch(url); 
let jsonData = await result.json(); 
console.log(`json데이터 => ${jsonData}`); 


console.log(`박스오피스타입 => ${jsonData.boxOfficeResult.boxofficeType}`); 
console.log(`showRange => ${jsonData.boxOfficeResult.showRange}`); 
console.log(`일간박스오피스순위 => 
    ${jsonData.boxOfficeResult.dailyBoxOfficeList[4].rank}`); 
console.log(`일간박스오피스영화명 => 
    ${jsonData.boxOfficeResult.dailyBoxOfficeList[4].movieNm}`); 









/*
console.log(`jsonData => ${jsonData}`); 결과값
boxOfficeResult: {
    boxofficeType: '일별 박스오피스',
    showRange: '20241121~20241121',
    dailyBoxOfficeList: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
*/





/*
     1. response 객체 살펴보기의 결과값
    Response {
        status: 200,  //status 는 숫자로 성공 에러를 나타낸다. 200대면 성공  400대,500대면 에러임
        statusText: 'OK',
        headers: Headers {
          date: 'Fri, 22 Nov 2024 01:
          'content-type': 'applicatio
          'transfer-encoding': 'chunk
          connection: 'keep-alive',
          server: '.'
        body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
        bodyUsed: false,
        ok: true,
        redirected: false,
        type: 'basic',
        url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82f82f55000c3a4465aa5bceb5a65f72&targetDt=20241121'
}
*/



