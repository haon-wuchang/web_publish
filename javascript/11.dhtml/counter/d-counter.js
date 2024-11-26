
window.addEventListener('DOMContentLoaded', function() {
    initForm();
}); 
//dcounter 폼 생성 함수 정의
function initForm() {
    let output = `
    <h1>DHTML - Counter</h1>
    <div class="counter_container">
        <div id="number">0</div>     
        <button type="button" class='button' data-operation='increment'>increment</button> 
        <button type="button" class='button' data-operation='decrement'>decrement</button> 
    </div>
    `;
    
    //counter 폼 출력
    document.querySelector('#content').innerHTML = output;
    //output 에잇는걸innnerHTML이 읽어서 #content에 넣어주는거임ㄴ
    //innterHTML ㅡ먼저 실행하고 카운터증가감소함수되는걸 실행해야대 둘이순서바꾸면 오류떠서안댐


    //DHTML로 생성된 버튼 이벤트 처리
    let buttons = document.querySelectorAll('.button');
    console.log(buttons); // 버튼즈 배열에 버튼들이 들어감
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let flag = button.dataset.operation;  //화면에 인크리먼트 디크리먼트 누르면 콘솔창에 뭘 눌럿는지찍힘
            let number = document.querySelector('#number').textContent;
            if(flag==='increment'){
                document.querySelector('#number').textContent = ++number;
            }else{
                if(number>0)
                document.querySelector('#number').textContent = --number;
            }
            
        });
    });
} 






