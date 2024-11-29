
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
} else if(phone.value ===''){
    phoneMsg.style.color = 'red';
    phone.focus();
} else if(email.value ===''){
    emailMsg.style.color = 'red';
    email.focus();
} else if (emaildomain.value === 'default'){
    emaildomain.focus();
    emaildomain.style.outlineColor = 'red';
}else{
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

    // if(event.target.id ==='id'){   //이거 스위치케이스로도 만들수있다.
    //     (textValue !==0) ? idMsg.style.color ='blue': idMsg.style.color ='red';
    // } else if(event.target.id ==='pw'){
    //     (textValue !==0) ? pwMsg.style.color ='blue': pwMsg.style.color ='red';
    // } else if(event.target.id ==='cpw'){
    //     (textValue !==0) ? cpwMsg.style.color ='blue': cpwMsg.style.color ='red';
    // } else if(event.target.id ==='name'){
    //     (textValue !==0) ? nameMsg.style.color ='blue': nameMsg.style.color ='red';
    // } else if(event.target.id ==='phone'){
    //     (textValue !==0) ? phoneMsg.style.color ='blue': phoneMsg.style.color ='red';
    // } else if(event.target.id ==='email'){
    //     (textValue !==0) ? emailMsg.style.color ='blue': emailMsg.style.color ='red';
    // } 

    switch (event.target.id) {
        case 'id':
            (textValue !==0) ? idMsg.style.color ='blue': idMsg.style.color ='red'; break;          
        case 'pw':
            (textValue !==0) ? pwMsg.style.color ='blue': pwMsg.style.color ='red'; break;        
        case 'cpw':
            (textValue !==0) ? cpwMsg.style.color ='blue': cpwMsg.style.color ='red'; break;          
        case 'name':
            (textValue !==0) ? nameMsg.style.color ='blue': nameMsg.style.color ='red'; break;          
        case 'phone':
            (textValue !==0) ? phoneMsg.style.color ='blue': phoneMsg.style.color ='red'; break;
        case 'email':
            (textValue !==0) ? emailMsg.style.color ='blue': emailMsg.style.color ='red'; break;        
    }


} //HandleChangeJoin 끝







