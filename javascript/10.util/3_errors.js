/* 에러처리 : try ~ catch ()
*/
let numbers = [1,2,3];  //length :3 index: 0~2
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]); 


numbers[0]=100;
console.log(numbers[0]);

numbers[9]=900;  
console.log(numbers[9]);

////////////////////////////////////////////////////////////////
///자바스크립트에서 오류뜨는경우 //
// let number =1234;
// for(n of number){
//     console.log(n);   }
// => TypeError: number is not iterable 넘버는 이터러블이 아니라 for...of 써서 오류발생

let number =1234;
try {
    for(n of number)console.log(n);
} catch (error) {
    
}

//위에서 에러가뜨면 밑에꺼는 아예 실행이 안되는데 
//우선 위에 에러뜬애를 v8엔진에 떠맡기고 밑에꺼부터 실행해줘 : 이게 try catch 임

console.log(`프로그램 종료`);  


