
//html 파일에서 스크립트부분에 타입모듈 안적어야 얘가 실행이된다


//ㄴ. input text 창에 값을 입력하면 아이디를입력해주세요 빨간색으로 뜨는게 파란색으로 아이디입력성공 이런식으로뜨게 만들어방
// 아이디 비밀번호 실시간 입력 시 체크 하는 함수 정의 
function handleChange(event){
    const idMsg = document.querySelector('#check-msg-id');
    const pwMsg = document.querySelector('#check-msg-pw');
    const textValue = event.target.value.trim().length;

    if(event.target.id=== 'id'){
        (textValue !==0 ) ? 
            idMsg.style.color='blue' : 
            idMsg.style.color='red';

    } else {
        (textValue !==0 ) ? 
            pwMsg.style.color='blue' : 
            pwMsg.style.color='red';
    }

}


//ㄱ. 로그인 폼 체크 함수 정의

function loginFormCheck() {
    const id = document.querySelector('#id');
    const pw = document.querySelector('#pw');
    const checkMsgId = document.querySelector('#check-msg-id');
    const checkMsgPw = document.querySelector('#check-msg-pw');

    if(id.value===''){
        checkMsgId.textContent = '아이디를 입력해주세요';
        checkMsgId.style.fontSize = '12px';
        checkMsgId.style.color = 'red';
        id.focus();
    } else if(pw.value ==='') {
        checkMsgPw.textContent = '비밀번호를 입력해주세요';
        checkMsgPw.style.fontSize = '12px';
        checkMsgPw.style.color = 'red';
        pw.focus();
    } else{
        //아이디 비교 로직 또는 함수 호출

    }
}











