//중복된 배열을 입력받아, 중복을 제거한 후 출력
// let numbers = [1,2,3,4,1,1,2,5,3,6,7,2];
// let numberSet = new Set(numbers);
// console.log(numbers.length, numbers);
// console.log(numberSet.size, numberSet);

//중복제거 함수 생성
function filtering(iterable) {
    return new Set(iterable);
}

let numbers = [1,2,3,4,1,1,2,5,3,6,7,2];
let names = ['kim','lee','park','lee','joo'];
let resultObj = filtering(numbers);
let resultObj2 = filtering(names);
console.log(numbers);  //[1,2,3,4,1,1,2,5,3,6,7,2];
console.log(resultObj);  //중복제거돼서 출력됨  => Set(7) { 1, 2, 3, 4, 5, 6, 7 }
console.log(resultObj2);  // Set(4) { 'kim', 'lee', 'park', 'joo' }



//사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조분해할당 사용)하는 함수를 생성
//결과값이 이렇게 출력되도록 ['삐_9329432', '묵_3283235'] 뒤에 숫자는 7자리가 랜덤하게

function createEmployeeNumber(array) {
    //배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환될때는 map사용
    return array.map((ename)=>
        // {} 블럭으로 묶은상태에서 실행한 경우반드시 return을 줘야한다 한줄이면 삭제가능 !!!!!!!!!!!!!!!!!!!!
       ename.concat('_', Math.trunc(Math.random()*10000000 )));
}


let employeeNames = ['삐','묵'];
let [ppy, muk] = createEmployeeNumber(employeeNames);  
console.log(`삐 => ${ppy}`);
console.log(`묵 => ${muk}`);





