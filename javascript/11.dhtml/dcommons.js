//공통 모듈 저장

//sum sub mul div 함수 작성 -모듈로 만들어서 누구든지 사용할수잇게함 export import
export function sum(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
export function sub(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}
export function mul(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}
// export function div(num1, num2) {
//     return parseInt(num1) / parseInt(num2);
// }
export default function div(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

//default 붙는애는 공통모듈에서 딱!! 하나만 존재해야한다  제일많이 실행되는 애한테 붙인다
//디폴트적은애는 임포트하는곳에서 {} 이걸로 안묶어도 된다.
//그대신 디폴트적은애의 함수이름을 젤 앞에 적어야함다
// div {sum, sub, mul} 이렇게 적어야만 실행이 된다 div 위치 아무데나 적으면 실행안댐


