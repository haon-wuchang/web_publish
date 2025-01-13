//readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습을 진행하는 파일이다
const fs = require('fs');
// console.log(fs);

//fs.readFile('파일의경로',파일을 읽은 후 실행하는함수(=콜백함수) );
fs.readFile('./readme.txt' , (error, data ) => {
    if(error) {
        console.log('에러발생');  // 에러가 났을떄 해당내용 출력
    } else {
        // console.log(data); 
        console.log(data.toString());
    }
});
// 그냥 data 만 출력하면 기계어로 출력되니까 toStiring함수로 문자열로 변환해서 가져와야한다


// 프로미스타입으로 결과를 리턴하는 경우
const fs2 = require('fs').promises;

fs2.readFile('./readme.txt')
    .then((data)=>{
        console.log('프로미스 결과=>>',data.toString());
    })
    .catch((error)=>{
        console.log('프로미스 결과=>>','에러발생');
    });

