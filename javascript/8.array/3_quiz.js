// 1. 배열의 '🍎' 요소를 '🍓'로 교체하라
let fruits = ['🍎','🍍','🍎'];

//1-1. for문으로 index 주소 변경하기
for(let i = 0;i <fruits.length;i++){
    if(fruits[i]=== '🍎') fruits[i] = '🍓' ;
    console.log(fruits[i]); 
}
console.log(`-------------------`);

//1-2. 함수를 만들어서 변경하기
// 파라미터(배열객체,old,new)  old= 사과 new= 딸기  
//교체한 값을 콘솔에 출력
function arrayReplace (array,oldValue,newValue) {
    let result = ''; 
    for(let i = 0;i <array.length;i++){
        if(array[i]=== oldValue) array[i] = newValue ;
       result += `${array[i]}\t`
    }
    console.log(result); 
}
arrayReplace(fruits,'🍎','🍓');

let numbers = [1,2,3,1,2,1,5];
arrayReplace(numbers,1,7);
console.log(`-------------------`);

// 1-3 함수 
// 파라미터(배열객체,old,new)
// 배열타입으로 객체를 반환
// function arrayReplace2 (array,oldValue,newValue) { 
//     for(let i = 0;i <array.length;i++){
//         if(array[i]=== oldValue) array[i] = newValue ;
//     }
//     return array;
// }    //얘를 아래꺼로 수정함(얕은복사하기위해)

//함수로 객체를 받아서 사용할떄는 카피본을 하나 만들고 사용(=>얕은복사)
function arrayReplace2 (array,oldValue,newValue) {   
    let resultArray = Array.from(array); 
    for(let i = 0;i <resultArray.length;i++){
        if(resultArray[i]=== oldValue) resultArray[i] = newValue ;   
    }
    return resultArray;   
}
   
let names =['hong','kim','lee','hong'];
let resultObj = arrayReplace2(names,'hong','park');
console.log(resultObj);