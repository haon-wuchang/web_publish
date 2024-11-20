
// text 배열을 입력받아 text의 길이가 3자 이상인 애들은 새로운 배열 객체로 생성하여 반환하라
// [1]arrow 함수로 작성
//  1.
// const textList = (object) => { 
//     return object.filter((text) => text.length >= 3);   
// }
//  2.
const textList = (object) => {
    let result = object.filter((text)=> {return text.length>=3});  
    return result;                                      
}                            

//[2]일반함수로 작성
// function textList2 (object) {
//     return object.filter((text) => text.length>=3);
// }

let textArray = ['skz','hamberger','cheese','chocomint','qq']; //다른곳에서도 사용ㄱㄴ 주소값잇어서
// let result = textList(['skz','hamberger','cheese','chocomint','qq']);  // ㅇㅣ케하면객체를 다른곳에서 호출 못함
let result = textList(textArray);
console.log(result);

// ///////////////////////////////////////////////////////////////////////////////

//숫자 배열을 입력받아 필터링하여 짝수,홀수로 나눠서 출력하는 함수를 생성하라
//출력되는 값들은 배열 객체에 담아 반환하라 ->filter
const evenNumberList =(number) => {
    return number.filter((num) => {
        return !(num % 2);     //10 % 2 =0(짝수) 0= false 라서 출력을 안함 그래서 결과값이 [1,3,5,7] 만 나옴
    });         //그래서 ! 으로 0이면 1로 바뀌어서 true 가 됨  (num % 2 ===0) 이렇게는 사용하지않음
}

const oddNumberList = (number) => {
    return number.filter((num)=> {
        return num % 2 ;   //얘 한줄이라 return {} 지워도댕!
    });
}

let numberArray = [1,2,3,4,5,6,7,8];
console.log(evenNumberList(numberArray));
console.log(oddNumberList(numberArray));


// ///////////////////////////////////////////////////////////////////////////////

//사원의 아이디를 받아서, 7자리사원번호를 랜덤하게 생성하여, 아이디와 번호를 조합하여 사번을 생성하라
// 사원의 아이디는 배열객체로 출력받고, 출력도 새로운 배열형태로 출력하라
// 아이디_7자리사원번호  형식으로 출력되게하라


// 1. 내용이 여러줄이라 return 많이 쓴 버전
// const createEmployeeNumber = (array) => {
//     return array.map((id) => {
//         //번호생성 따로 합치는거 따로해도됨 
//         let number = Math.floor(Math.random()* 100000000);
//         return id.concat('-',number);
//     });
// }

//2. 내용을 한줄로 합쳐서 return 과 map의{} 삭제한 버전
// const createEmployeeNumber = (array) => { }
//     return array.map((id) => id.concat('-',Math.floor(Math.random()* 100000000)))}

//3. 중복된 데이터 처리하기 Set 추가
const createEmployeeNumber = (array) => {
    let deldata = new Set(array);
    return Array.from(deldata).map((id) => 
    id.concat('-',Math.floor(Math.random()* 100000000)))
}


const employeeId = ['hong','lee','kim','park','hong'];
const employeeNumbers = createEmployeeNumber(employeeId);
console.log(employeeNumbers);




