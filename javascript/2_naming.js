/*여러줄주석 */
// 한줄주석

/**
 * <변수명 선언 규칙>
 * 1.camel case : ex> camelCase
 *  2. snake case : ex> snake_case
 * 사용가능언어
 * 라틴어 (0~9) , 소문자,대문자(,a~z)
 * 특수문자($ _) 얘네 둘만 ㄱㄴ
 * 
 *  대소문자 구분 잘해서 썽
 * 
 * <변수명 선언 시 주의사항>
 * 숫자로 시작 금지
 * 예약어(키워드) 사용 금지
 * 특수문자 가능한 애들말고 다른거 사용 금지
 * 이모지 사용 금지
 * 
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
// 띄어쓰기도 포함해서 출력됨
console.log(output);


// 템플릿 리터럴 을 사용해서  출력 \  이렇게 하는걸 권장 문자열 맨처음과끝에 물결표시 누르면댐(ㅋ보드1옆에잇는거)
// 예제 1 저의 이름은 삐묵이고 나이는 100입니다. 를 출력하세요
let output2 =`저의 이름은 ${myName}이고 나이는 ${myAge}입니다`; 
console.log(output2);

// 상수 선언 방식 :: 변수, 상수는 프로그램(코드)상단에 위치 시킨다
// 상수를 선언 시 모두 대문자,스네이크케이스 로 선언하는것이 좋다
// 같은 단어쓸때는 같은단어를 맨 앞에 적는게 좋다
const DEVICE_START = 1;
const DEVICE_CONTIN = 2;
const DEVICE_FINISH = 0;

