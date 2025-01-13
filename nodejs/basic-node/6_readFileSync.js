// fs 호출 한 후 readme, readme2 파일을 순서대로 읽어서 출력하라 readFile() 함수이용
const { log } = require('console');  // - 얘는 뭔데 자동으로 생성됨??
const fs = require('fs');
const fs2 = require('fs');

fs.readFile('./readme.txt',(error,data)=>{
    if(error){
        console.log('에러');
    } else {
        console.log(data.toString());
    }
})

fs2.readFile('./readme2.txt',(error,data)=>{
    if(error){
        console.log('에러에러');
    }else{
        console.log(data.toString());     
    }
})


