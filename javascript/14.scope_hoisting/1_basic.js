let aa = 100;   //aa는 전역변수(global Variable) 이다

{    //-----scope
    let a =10;
    console.log(a);   
    console.log(aa);
}
//a는 로컬변수라서 { } 선언된 해당 블럭 밖에서 출력불가
// console.log(a);  --이렇게 출력 불가능

///////////////////////////////////////////////////////////////////

// 1~5 까지 출력하라
for(let i =1; i<6; i++) console.log(i);   // block
// i = 로컬변수이다 
for(let i =1; i<6; i++) console.log(i);





















