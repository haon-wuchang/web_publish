
//1.  회원가입 폼 유효성 체크
function joinFormCheck() {
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const cpw = document.querySelector('#cpw');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const emaildomain = document.querySelector('#emaildomain');

const idMsg = document.querySelector('#check-msg-id');
const pwMsg = document.querySelector('#check-msg-pw');
const cpwMsg = document.querySelector('#check-msg-cpw');
const nameMsg = document.querySelector('#check-msg-name');
const phoneMsg = document.querySelector('#check-msg-phone');
const emailMsg = document.querySelector('#check-msg-email');

const idCheckResult = document.querySelector('#idCheckResult');  // 5.

if(id.value ===''){
    idMsg.style.color = 'red';
    id.focus();
} else if(pw.value ===''){
    pwMsg.style.color = 'red';
    pw.focus();
} else if(cpw.value ===''){
    cpwMsg.style.color = 'red';
    cpw.focus();
} else if(name.value ===''){
    nameMsg.style.color = 'red';
    name.focus();
} else if(phone.value ===''){  // 추가로 조건 넣으려면 && 이거 쓰면댕
    phoneMsg.style.color = 'red';
    phone.focus();
} else if(email.value ===''){
    emailMsg.style.color = 'red';
    email.focus();
} else if (emaildomain.value === 'default'){
    emaildomain.focus();
    emaildomain.style.outlineColor = 'red';
} else if(idCheckResult.value === 'default') {  //5.
    alert('아이디 중복체크를 해주세요');
} 
else{
    alert('가입성공');
}

} //joinFormCheck 끝


//2. 회원가입폼 실시간 체크
function HandleChangeJoin(event) {
    const idMsg = document.querySelector('#check-msg-id');
    const pwMsg = document.querySelector('#check-msg-pw');
    const cpwMsg = document.querySelector('#check-msg-cpw');
    const nameMsg = document.querySelector('#check-msg-name');
    const phoneMsg = document.querySelector('#check-msg-phone');
    const emailMsg = document.querySelector('#check-msg-email');
 
    const textValue = event.target.value.trim().length;

    if(event.target.id ==='id'){   //이거 스위치케이스로도 만들수있다.
        (textValue !==0) ? idMsg.style.color ='blue': idMsg.style.color ='red';
    } else if(event.target.id ==='pw'){
        (textValue !==0) ? pwMsg.style.color ='blue': pwMsg.style.color ='red';
    } else if(event.target.id ==='cpw'){
        (textValue !==0) ? cpwMsg.style.color ='blue': cpwMsg.style.color ='red';
    } else if(event.target.id ==='name'){
        (textValue !==0) ? nameMsg.style.color ='blue': nameMsg.style.color ='red';
    } else if(event.target.id ==='phone'){
        (textValue !==0) ? phoneMsg.style.color ='blue': phoneMsg.style.color ='red';
    } else if(event.target.id ==='email'){
        (textValue !==0) ? emailMsg.style.color ='blue': emailMsg.style.color ='red';
    } else if(event.target.id = 'emaildomain') {
        (event.target.value.trim() !== 'default') ? emaildomain.style.outlineColor='blue':
        emaildomain.style.outlineColor = 'red';
    }

    // switch (event.target.id) {
    //     case 'id':
    //         (textValue !==0) ? idMsg.style.color ='blue': idMsg.style.color ='red'; break;          
    //     case 'pw':
    //         (textValue !==0) ? pwMsg.style.color ='blue': pwMsg.style.color ='red'; break;        
    //     case 'cpw':
    //         (textValue !==0) ? cpwMsg.style.color ='blue': cpwMsg.style.color ='red'; break;          
    //     case 'name':
    //         (textValue !==0) ? nameMsg.style.color ='blue': nameMsg.style.color ='red'; break;          
    //     case 'phone':
    //         (textValue !==0) ? phoneMsg.style.color ='blue': phoneMsg.style.color ='red'; break;
    //     case 'email':
    //         (textValue !==0) ? emailMsg.style.color ='blue': emailMsg.style.color ='red'; break;        
    //     case 'emaildomain':
    //         (event.target.value.trim() !== 'default') ? emaildomain.style.outlineColor ='blue': emaildomain.style.outlineColor ='red'; break;        
    // }
} //HandleChangeJoin 끝

// 아이디 중복확인 함수
function idCheckButton(event) {  //4. 중복확인창 출력후 중복확인버튼색을 파랑으로 변경하기위해서 html 파일에서 파라미터로 event 르 ㄹ넣은것이다
    const did = 'test';
    const id = document.querySelector('#id');
    const idMsg = document.querySelector('#check-msg-id');

    if(id.value===''){
        idMsg.style.color = 'red';
        id.focus();

    } else {
        //중복체크
        if(did===id.value.trim()){
            alert('이미 사용중인 아이디입니다.');
            id.focus();
        } else {
            alert('사용가능한 아이디입니다.');
            event.target.style.backgroundColor = 'blue';
            document.querySelector('#idCheckResult').value = 'success'; //5. 가입하기 버튼을 눌럿을떄 중복확인을 햇는지 alert 를 띄워서 확인하기
            // console.log(document.querySelector('#idCheckResult').value);
            
        }
    }
}  //idCheckButton 끝


//6.비밀번호 비밀번호확인 내용이 같은지 비교하기-> 커서가 비밀번호확인칸에서 빠져나올때 이벤트 진행함 onfocusout or onblur 사용
// 비밀번호 비밀번호확인 일치여부 확인 함수
function cpwCheck() {
    const pw = document.querySelector('#pw');
    const cpw = document.querySelector('#cpw');
    const pwMsg = document.querySelector('#check-msg-pw');
    const cpwMsg = document.querySelector('#check-msg-cpw');

    if(pw.value ===''){
        pwMsg.style.color = 'red';
        pw.focus();
    } else if(cpw.value===''){
        cpwMsg.style.color = 'red';  //유효성체크 후에 비밀번호 값 비교해야함
        cpw.focus();
    } else{
        if(pw.value===cpw.value){
            alert('비밀번호가 일치합니다.');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            pw.value = '';
            cpw.value = '';
            pwMsg.style.color = 'red';
            cpwMsg.style.color = 'red';
            pw.focus();
        }
        
    }
}