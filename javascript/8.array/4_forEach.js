
let numbers = [1,2,3,4,5];

//for
for(let i=0;i<numbers.length;i++){
    console.log(`numbers[${i}] = ${numbers[i]}`);
}
console.log(`---------------------`);

//forEach     =>배열에서 사용되는 인스턴스함수라서 배열명.forEach(); 이렇게 사용해야된다. for 처럼 단독으로 작성 x
 //  numbers.forEach((변수이름) => {  });   변수이름은 아무거나 해도됨

// numbers.forEach((element) => console.log(`numbers = ${element}`)); //한줄이니까 {} 지워도 됨
numbers.forEach((element,i) => console.log(`numbers[${i}] = ${element}`)); // 얘를 for 문 결과값처럼 쓸려고함

console.log(`---------------------`);

//arrayReplace3 함수를 forEach 형태로 전환하기 (3_quiz 내용)
function arrayReplace3(array,origin,target){
    let arrayObj = Array.from(array);   //얕은복사 형식으로 작성함 from()
    arrayObj.forEach((element,index) => {
        if(element===origin)
            arrayObj[index]=target;
         });
         return arrayObj;
}

let fruits = ['🍎','🍍','🍎'];
let result= arrayReplace3(fruits,'🍎','🥝'); 
console.log(result);


function arrayReplace4(array,origin,target){
    let arrayObj = Array.from(array);   //얕은복사 형식으로 작성함 from()
    arrayObj.forEach((element,index) => {
        if(element===origin)
           arrayObj.splice(index,1,target);
         });
         return arrayObj;
}

let nums = [1,2,3,4,5,1,1];
let result2= arrayReplace4(nums,1,9); 
console.log(result2);