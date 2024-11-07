
/**

 * 
 *  대소문자 구분 잘해서 썽

 */
// camel case
let myName = '삐묵';
let myAge = 100;

console.log(myName);
console.log(myAge);

// snake case
let audio_name = 'skz';
let audio_color ='red';

console.log(audio_name);
console.log(audio_color);
// log 만 적으면 단축키로 밑에 콘솔도 나옴용


// 예제 1 저의 이름은 삐묵이고 나이는 100입니다. 를 출력하세요
let output = "저의 이름은 " + myName + "이고 나이는 " + myAge + "입니다"; 
console.log(output);


// 예제 1 저의 이름은 삐묵이고 나이는 100입니다. 를 출력하세요
let output2 =`저의 이름은 ${myName}이고 나이는 ${myAge}입니다`; 
console.log(output2);


const DEVICE_START = 1;
const DEVICE_CONTIN = 2;
const DEVICE_FINISH = 0;

