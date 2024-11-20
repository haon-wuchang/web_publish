/*자바스크립트 호출 시 html의 <body>를 DOM에 먼저 로딩 후 실행하도록 하는 함수들
    - window.onload()
    - document.ready()   =>제이쿼리에서 사용됨
    - DOMContentLoaded()
*/

//window = 브라우저 전체를 가리키는 객체(built-in 객체임)
//.addEventListener('이벤트', 콜백함수 );  //addEventListener : 이벤트를 줄수잇는함수
window.addEventListener('DOMContentLoaded', function() {
    initForm();
}); 
//dcalculator 폼 생성 함수 정의
function initForm() {
    let output = `
    <div>
        <h1>계산기</h1>
        <ul>
            <li>
                <input type="text" placeholder="값1" id="number1">
                <input type="text" placeholder="값2" id="number2">
            </li>
            <li>
                <button type="button" onclick="buttonClick('+')">➕</button>
                <button type="button" onclick="buttonClick('-')">➖</button>
                <button type="button" onclick="buttonClick('*')">✖</button>
                <button type="button" onclick="buttonClick('/')">➗</button>
            </li>
            <li>
                <input type="text">
            </li>
        </ul>
    </div>
    `;

    //dcalculator 폼 출력
    document.querySelector('#calculatorForm').innerHTML = output;


}