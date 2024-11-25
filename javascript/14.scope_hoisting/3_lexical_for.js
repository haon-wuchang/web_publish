
//1~5까지 출력
for(let i =1; i<6 ;i++){
    console.log(i);
}


let a = [1,2,3];
// for(let i = 0; i<a.length; i++){   let 이면 에러뜸 전역스코프칸에는 i 값이 없기때문
for(var i = 0; i<a.length; i++){
    console.log(`a[${i}]= ${a[i]}`);
}
console.log(`a[${i}] = ${a[0]}`);
console.log(`a[${i}] = ${a[1]}`);
console.log(`a[${i}] = ${a[2]}`);


/////////위에꺼를 for of 로 작성/////////////////
for(let element of a) {
    console.log(element);
}
