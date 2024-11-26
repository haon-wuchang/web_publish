/*
// 





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

