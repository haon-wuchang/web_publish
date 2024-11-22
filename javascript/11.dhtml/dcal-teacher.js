//import
import div,{sum, sub, mul} from './dcommons.js';

initForm();

// 계산기 폼 생성하는 함수
function initForm() {
    let output= `
    <h1>DHTML-계산기</h1>
        <ul>
            <li> <!-- 계산할 값 입력하는 텍스트박스-->
                <input type="text" placeholder="값1" id="number1">
                <input type="text" placeholder="값2" id="number2">
            </li>
            <li>
                <button type="button" class='button' data-operation='sum' >➕</button>
                <button type="button" class='button' data-operation='sub'>➖</button>
                <button type="button" class='button' data-operation='mul'>✖</button>
                <button type="button" class='button' data-operation='div'>➗</button>
            </li>
            <li> <!--결과값 출력되는 텍스트박스-->
                <h3 id='total'>결과값=></h3>
            </li>
        </ul>
                                            
    `;                                 
    //화면출력
    document.querySelector('#content').innerHTML = output;

    //버튼 이벤트 처리
    let buttonList = document.querySelectorAll('.button');
    // console.log(buttonList);

    //이벤트는 버튼마다 따로따로 줘야함
    buttonList.forEach((button) => { 
        
        button.addEventListener('click',() => {  //자바스크립트에서는 클릭이고 html꺼 온클릭가져올때는 온클릭적어야함
            let number1 = document.querySelector('#number1').value;  
            let number2 = document.querySelector('#number2').value;

            //결과값을 출력할 중간값 만들기
            let result = 0;

            let operation = button.dataset.operation;


            //버튼에 따라서 어떤 계산기호를눌러야대는지 확인작업. 함수사용
            switch (operation) {
                case 'sum' : result = sum(number1,number2); break;
                case 'sub' : result = sub(number1,number2); break;
                case 'mul' : result = mul(number1,number2); break;
                case 'div' : result = div(number1,number2); break;
            }

            console.log(`result = ${result}`);
            document.querySelector('#total').textContent = `결과값=> : ${result}원`;
        });  
    
    
    
    });

} //initForm 끝




