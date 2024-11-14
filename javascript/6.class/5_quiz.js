//학생student class 생성, 
// 속성 : #name,#age,#address,별칭
//메소드 : setter, getter 정의


class Student {
    #name;
    #age;
    #address;
    constructor(name,age,address,nickName){
        //field
        this.#name= name;
        this.#age=age;
        this.#address=address;
        this.nickName=nickName;
    }

    //method           getter setter 쓸때는 getter 먼저 작성
    // getName = () => {return this.#name} ;  //원래 이거임 근데생략한거지
    // getAge = () => this.#age;
    // getAddress = () => this.#address;
    // getNickName= () => this.nickName;

    // setName = (name) => this.#name=name;
    // setAge = (age) => this.#age=age;
    // setAddress = (address) => this.#address=address;
    // setNickName = (nickName) => this.nickName=nickName;
    
    get name () {return this.#name};  // getter,setter 작성방식 2
    get age () {return this.#age};  
    get address () {return this.#address}; 
    // get nickName () {return this.nickName}; 

    //set,get 함수형식은 private 로 정의된 필드값에 한해서 생성한다  방식2에서만 안되는거임용
    // private 로 정의된 필드 값은 반드시 set함수가 필요하다  ninkname은 setter,getter 함수로 못씀 
    set name (name) {this.#name=name;}
    set age (age) {this.#age=age;}
    set address (address) {this.#address=address;}
    // set nickName (nickName) {this.nickName=nickName;}

}


//호출하는것도 하나 만들어야징
const ha = new Student('하온','25','서울시','삐뮥');
// console.log(`${ha.getName()}\n${ha.getAge()}\n${ha.getAddress()}\n${ha.getNickName()}`);  

//log 찍을때 내용 중간에 엔터치면 그대로 엔터친것까지 출력댐
// \n 은 한줄씩 띄워서 값 출력

//getter setter 작성방식2 호출방법
// console.log(`${ha.name}`);
// console.log(`${ha.age}`);
// console.log(`${ha.address}`);
// console.log(`${ha.nickName}`);
ha.name='바바바';
console.log(`${ha.name}\n${ha.age}\n${ha.address}\n${ha.nickName}`);

