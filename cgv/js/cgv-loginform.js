//html 파일에서 스크립트부분에 타입모듈 안적어야 얘가 실행이된다


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