//중첩for문 : 이차원 형태의 저장소에서 데이터 출력 !!!!!
//==> for문 두개쓰는거양
/**  for(){ 행기준
    for(){ 열기준   inner for 문을 완료해야
    }               outer for문 실행가능
}

*예제 1
1(1,1) 2(1,2) 3(1,3)   1은 1행1열 3은 1행3열 이케됨  123은 1행반복이고 열이 1씩증가
4(2,1) 5(2,2) 6(2,3) 456은 2행반복 열 1씩증가
*/

let count = 1;   //for 문 밖에다가 써야댕
for(let i = 1; i<3 ; i++ ){
    let rows ='';    
    for( let j = 1 ; j<4 ; j++ ){
        rows += `${count++}\t`;   
     }
    console.log(rows);
}


2씩증가
let count = 1;   //for 문 밖에다가 써야댕
for(let i = 1; i<3 ; i++ ){
    let rows ='';    
    for( let j = 1 ; j<4 ; j++ ){
        rows += `${count += 2}\t`;   
     }
    console.log(rows);
}
// console.clear();  
