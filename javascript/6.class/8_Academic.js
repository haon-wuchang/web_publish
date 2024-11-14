/*
학사관리 프로그램을 생성하는경우, 사용자를 정의하는 클래스를 설계
학생,교수,학부모,직원 => Member 라는 부모클래스 (이름,나이,주소)
학생-학번sno  교수-담당과목professor-subject  학부모-자식 parent-childName 직원Employee-담당부서-dept

*/
class Member {
    #name;
    #age;
    #address;
    constructor(name,age,address){ //자식 클래스 생성자함수에서 super 메소드가 호출될떄 constructor가 실행도미
        this.#name=name;
        this.#age=age;
        this.#address=address;
    }
    get name () {return this.#name;}
    get age () {return this.#age;}
    get address () {return this.#address;}


}

class Student extends Member {
    #sno;   //private 애들은 해당 class 안에서 매소드를 만들어야돼
    constructor(name,age,address,sno){
        super(name,age,address);
        this.#sno=sno;
    }
    get sno() {return this.#sno;}
}

class Professor extends Member {
    #subject;
    constructor(name,age,address,subject){
        super(name,age,address);
        this.#subject=subject;
    }
    get subject() {return this.#subject;}
}

class Parent extends Member {
    #childName;
    constructor(name,age,address,childName){
        super(name,age,address);
        this.#childName=childName;
    }
    get childName() {return this.#childName;}
}

class Employee extends Member {
    #dept;
    constructor(name,age,address,dept){
        super(name,age,address);
        this.#dept=dept;
    }
    get dept() {return this.#dept;}
}
//signup 버튼 클릭시 호출되는 함수   유효성체크는 우선 안함
const signupCheck= () => {
    let type = document.querySelector('input[type=radio]:checked');
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let address = document.querySelector('#address');
    let sno = document.querySelector('#sno');
    let childName = '';
    let dept = '';
    alert(type.value);

    //입력되는 type 에 따라서 class 를 생성한다
    let member = null;
    switch(type.value) {
        case '1': 
        member = new Student(name.value,age.value,address.value,sno.value); 
        break;   
        case '2': 
        member = new Professor(name.value,age.value,address.value,subject.value); 
        break;   
        case '3': 
        member = new Parent(name.value,age.value,address.value,childName.value); 
        break;   
        case '4': 
        member = new Employee(name.value,age.value,address.value,dept.value); 
        break;   
        default : 
    }

    console.log(member);
    
}









// const haon = new Student('하온','25','서울시','1213')
// const ms213 = new Professor('멋교수','40','인천','자바스크립트')
// const haonP = new Parent('하온부모','48','서울시','하온')
// const trust = new Employee('믿어핑','3','보석숲','개발1팀')
// console.log(`***학생정보***`);
// console.log(`이름 : ${haon.name}\n나이 : ${haon.age}\n주소 : ${haon.address}\n학번 : ${haon.sno}\n`);
// console.log(`***교수정보***`);
// console.log(`이름 : ${ms213.name}\n나이 : ${ms213.age}\n주소 : ${ms213.address}\n담당과목 : ${ms213.subject}\n`);
// console.log(`***부모정보***`);
// console.log(`이름 : ${haonP.name}\n나이 : ${haonP.age}\n주소 : ${haonP.address}\n자녀명 : ${haonP.childName}\n`);
// console.log(`***직원정보***`);
// console.log(`이름 : ${trust.name}\n나이 : ${trust.age}\n주소 : ${trust.address}\n담당과목 : ${trust.dept}`);
//단위테스트 : 