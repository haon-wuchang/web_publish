/*
학사관리 프로그램을 생성하는경우, 사용자를 정의하는 클래스를 설계
학생,교수,학부모,직원 => Member 라는 부모클래스 (name.age.address)
학생-학번sno  교수-담당과목professor-subject  학부모-자식 parent-childName 직원Employee-담당부서-dept

*/
class Member {
    #name;   
    #age;
    #address; 
    constructor(name,age,address){
        this.#name=name;
        this.#age=age;
        this.#address=address;
    }
    get name () {return this.#name;}  
    get age () {return this.#age;}
    get address () {return this.#address;}
}

class Student extends Member {
    #sno;  
    constructor(name,age,address,sno){
        super(name,age,address);
        this.#sno=sno;
    }
    get sno() {return this.#sno;}
    get values () {
        return [this.name, this.age, this.address ,this.#sno];
    }
}

class Professor extends Member {
    #subject;
    constructor(name,age,address,subject){
        super(name,age,address);
        this.#subject=subject;
    }
    get subject() {return this.#subject;}
      get values () {
        return [this.name, this.age, this.address ,this.#subject];
    }
}

class Parent extends Member {
    #childName;
    constructor(name,age,address,childName){
        super(name,age,address);
        this.#childName=childName;
    }
    get childName() {return this.#childName;}
      get values () {
        return [this.name, this.age, this.address ,this.#childName];
    }
}

class Employee extends Member {
    #dept;
    constructor(name,age,address,dept){
        super(name,age,address);
        this.#dept=dept;
    }
    get dept() {return this.#dept;}
      get values () {
        return [this.name, this.age, this.address ,this.#dept];
    }
}
//signup 버튼 클릭시 호출되는 함수   유효성체크는 우선 안함
const signupCheck= () => {
    let type = document.querySelector('input[type=radio]:checked');
    let name, age, address, sno, subject, childName, dept ;
    let member = null;


    //입력되는 type 에 따라서 class 를 생성한다 
    switch(type.value) {
        case '1': 
        name=document.querySelector('#student #name');  
        age=document.querySelector('#student #age');
        address=document.querySelector('#student #address');
        sno=document.querySelector('#student #sno');
        member = new Student(name.value,age.value,address.value,sno.value); 
        break;   

        case '2': 
        name=document.querySelector('#professor #name'); 
        age=document.querySelector('#professor #age');
        address=document.querySelector('#professor #address');
        subject=document.querySelector('#professor #subject');
        member = new Professor(name.value,age.value,address.value,subject.value); 
        break;   

        case '3': 
        name=document.querySelector('#parent #name');
        age=document.querySelector('#parent #age');
        address=document.querySelector('#parent #address');
        childName=document.querySelector('#parent #childName');
        member = new Parent(name.value,age.value,address.value,childName.value); 
        break;  

        case '4': 
        name=document.querySelector('#employee #name');
        age=document.querySelector('#employee #age');
        address=document.querySelector('#employee #address');
        dept=document.querySelector('#employee #dept');
        member = new Employee(name.value,age.value,address.value,dept.value); 
        break;   
    } //end of switch case
    console.log(member);
    //자바스크립트로 생성되는 HTML 을 dynamic HTML(DHTML)이라고한다

    // let list = Object.keys(member);  //list 내용  ['name','age','address','sno'] 키값이라 ' ' 써준거임 얘내가 전부 프라이빗이라 해당클래스밖에선는호출이 불가능하다
    //위의 코드Object.keys가 사용이 안되는 이유 : 클래스의 필드값이 private 인 경우에는 외부에서 해당 데이터를 가져올 수 없다 그래서 해당클래스에서 가져와야댄당(에러는안뜨고 데이터만 빈값으로 나옴)
    
    let list = '';
    member.values.forEach((items) => {
        list += `<li>${items}</li> `;    //list에 중복으로 적용되야하니까 += 씀 자동종료되면 안댕
    });  //items 이름은 아무거나해도됌 
    //for each 는 자동으로 엔진이 배열ㅇ르 넣어줌 [1,2,3,4] 4까지만 넣고 자동종료됨 

    
    let output = `<ul>${list}</ul>`; //d얘네 4번돌리는거를 하나로 합친게 list 얌

    document.querySelector('#result').innerHTML = output ; //얘는 signup버튼을 눌러야만 나옴 이런애들을 동적 html 이라고한다=다이나믹html (메모리에 동적으로생성되니까)
        //innerHTML 에는 html태그쓰면대

} //end of signupCheck


//display : radio 버튼 선택시 선택폼 화면 전환 시키는 함수  맨첨엔 아무것도 안나오게하고 radio 선택함녀 해당 폼만 나오게 ㄱ
const display = (type) => {
    //화면전환시 밑에 <ul> result가 안나오게
    document.querySelector('#result').innerHTML = '';

    document.querySelector('#student').style.display='none';
    document.querySelector('#professor').style.display='none';
    document.querySelector('#parent').style.display='none';
    document.querySelector('#employee').style.display='none';

    //type:1 = 학생폼 
    if(type==='1') {
        document.querySelector('#student').style.display='block';
        //type:2 = 교수폼
    } else if (type==='2') {
        document.querySelector('#professor').style.display='block';
        //type:3 =부모폼
    } else if (type==='3') {
        document.querySelector('#parent').style.display='block';
        //type:4 = 직원폼
    }else if (type==='4') {
        document.querySelector('#employee').style.display='block';
    } // end of if
}  // end of display




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