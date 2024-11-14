//로그인 체크를 위한 클래스 정의하라
class User {
    #id;
    #pass;
    constructor(id,pass) {
        this.#id=id;
        this.#pass=pass;
    }

    getId = () => this.#id;
    getPass = () => this.#pass;

    setId = (id) => this.#id=id;
    setPass = (pass) => this.#pass=pass;
}
//로그인 버튼클릭시 호출하는 함수
let user = null;
const DID = 'test';
const DPASS = '1234';
function loginCheck() {
    let id = document.querySelector('#id');  //id 값이 입력되는 폼객체를 카리킴 value 값 아님요
    let pass = document.querySelector('#pass');
    
    if(id.value===''){           //유효성체크임
        alert('아이디를 입력해주세요');
        id.focus();
    } else if(pass.value===''){
        alert('비밀번호를 입력해주세요');
        pass.focus();
    } else {   //입력받은 id password 값을 User class객체를 생성과 처리작업 //class로 만드는이유는 private 접근제어를 할수잇긷때문엥
        user = new User(id.value, pass.value);
        console.log(user.id, user.pass);
        
        if(DID===user.getId() && DPASS===user.getPass())  alert('로그인성공');

        //아까 set get방식 2로 하면 if(DID===user.id() && DPASS===user.pass())  alert('로그인성공'); 이케 적으면 댕 
         else alert('로그인실패');
    }
}   //함수만들때는 함수하나당 하나의 기능만 하게 만드는게 좋다















// const haon = new User ('baka','1234');
// console.log(`id: ${haon.getId()} pass:${haon.getPass()}`)
// haon.setId('koko');
// console.log(haon.setId());

