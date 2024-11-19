// for...of : 
// 형식 : for(변수=variable of 이터러블객체=iterable_object){  statement=실행문; }


//배열의 요소를 교체하는 함수를 정의하라-> 이런건 forEach 가 적합하긴함

//1. for ...of 사용
// function replace(array,origin,target) {
//     let resultArray = Array.from(array)  
//     let index = 0;
//     for(element of resultArray){
//         if(element=== origin) {
//             //splice(인덱스,1,교체할요소);
//             resultArray.splice(index,1,target);
//         }
//         index++;  
//     }
//    return resultArray;
// }

// 2. for 사용  
// function replace(array,origin,target) {
//     let resultArray = Array.from(array)  
   
//     for(let i = 0; i<resultArray.length; i++) {
//         let element = resultArray[i]; //resultarray에잇는 0번지를가져와서 element에 넣어줌
//         if(element===origin) {
//             resultArray.splice(i,1,target);
//         }
//     }
//     return resultArray;
// }


//2. forEach 사용 
function replace(array,origin,target) {
    let resultArray = Array.from(array);  

    resultArray.forEach((element,index)=>{
        if(element===origin){
            resultArray.splice(index,1,target);
        }
    });
    return resultArray;
}


let numbers = [1,2,3,6,3,2,4,7,2,1];
let result2 = replace(numbers, 2, 0);
console.log(result2);

let fruits = ['🥝','🍍','🍉','🥝','🥥','🍎','🥝'];
let result = replace(fruits, '🥝','🍓');
console.log(result); 



