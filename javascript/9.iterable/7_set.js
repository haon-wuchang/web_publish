/*  
Set 
*/

let mySet = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add('홍길동'); 
mySet.add({age : 20});
mySet.add([1,2,3,4]);

console.log(mySet);
// Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3, 4 ] }


//데이터 순회
let mySet1 = new Set();
mySet.add(10);
mySet.add('홍길동');
mySet.add('홍길동'); 
mySet.add({age : 20});
mySet.add([1,2,3,4]);

for(let value of mySet1){
    console.log(`value = ${value}`); 
}
/* 결과값
value = 10
value = 홍길동
value = [object Object]
value = 1,2,3,4
*/
console.log(`-----------------------------`);

mySet.forEach((value,key,set) => {
    console.log(value, key, set);
})

console.log(`-----------------------------`);
//데이터 확인
console.log(mySet.has(10)); //true

//데이터 삭제
if(mySet.has(1000)) {
    mySet.delete(1000);
    console.log(`삭제완료`);
    }

else console.log(`데이터가 존재하지 않음`);  //데이터가 존재하지 않음

console.log(mySet); // Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 3, 4 ] }
console.log(`-----------------------------`);
//전체삭제
mySet.clear();
console.log(mySet);  //Set(0) {}



