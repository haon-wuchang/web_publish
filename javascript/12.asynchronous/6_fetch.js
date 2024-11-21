/* API의 promise 리턴값 확인 후 호출
// mdn 에서 뭐 찾을때 반환값에 promise잇으면 then, catch로 받으면댕
없으면 걍 콜백함수로 받아서 큐로가서 기다리다가 루프로 실행 되는거임


fetch(네트워크로 접속할서버의 주소 URL: )      // resolve(result),reject(error)
    .then((result) => {결과에 해당하는로직})
    .catch((error) => {});

    얘의 실행결과를 프로미스가 성공햇는지 실패햇는지 알려줌

*/

const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101`;
fetch(url)
    .then((result) => {console.log(`result => ${result}`)})
    .catch((error) => {console.log(`error => ${error}`)});

//<결과값>
//    result => [object Response]
    //결과값이ㅣ 오브젝트로나왓다ㅡㄴ거임

// 저링크들어가면 아래처럼 나옴 {}에 내용 들어있으니까 오브젝트임
//{"faultInfo":{"message":"유효하지않은 키값입니다.","errorCode":"320010"}}

