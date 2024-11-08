//중첩for문 : 이차원 형태의 저장소에서 데이터 출력
//==> for문 두개쓰는거양
/**  for(){ 행기준
    for(){ 열기준   inner for 문을 완료해야
    }               outer for문 실행가능
}
    
*예제 1
1(1,1) 2(1,2) 3(1,3)   1은 1행1열 3은 1행3열 이케됨  123은 1행반복이고 열이 1씩증가
4(2,1) 5(2,2) 6(2,3) 456은 2행반복 열 1씩증가
*/

for(let i = 1; i<2 ; i++ ){
    let rows ='';
    for( let j = 1 ; j<4 ; j++ ){
        rows += `${j}\t`;
    }
    console.log(rows);
}

for(let h = 1; h<2 ; h++ ){
    let rows ='';
    for(let l = 4 ; l<7 ; l++ ){
        rows += `${l}\t`;
    }
    console.log(rows);
}


