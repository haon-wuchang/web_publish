// fs 호출 한 후 readme, readme2 파일을 순서대로 읽어서 출력하라 readFile() 함수이용
const { log } = require('console');  // - 얘는 뭔데 자동으로 생성됨??
const fs = require('fs');

// fs.readFile('./readme.txt',(error,data)=>{
//     if(error){
//         console.log('에러');
//     } else {
//         console.log(data.toString());
//     }
// })

// fs.readFile('./readme2.txt',(error,data)=>{
//     if(error){
//         console.log('에러에러');
//     }else{
//         console.log(data.toString());     
//     }
// })

//readFile() 함수를 이용하는경우는 비동기식 처리이므로, 순서가 차례대로 출력이 되지 않을 수 있다.
// 비동기식이면서 순서를 지켜야하는 코드에서는 => readFileSync() 함수를 사용해야 한다

const fs2 = require('fs');

let data = fs2.readFileSync('./readme.txt');
console.log('readme1 ==>>',data.toString());

let data2 = fs2.readFileSync('./readme2.txt');
console.log('readme2 ==>>',data2.toString());







