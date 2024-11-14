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

    get name () {return this.#name};  
    get age () {return this.#age};  
    get address () {return this.#address}; 

    set name (name) {this.#name=name;}
    set age (age) {this.#age=age;}
    set address (address) {this.#address=address;}

}


//호출하는것도 하나 만들어야징
const ha = new Student('하온','25','서울시','삐뮥');

// getter setter 작성방식2 호출방법
console.log(`${ha.name}`);
console.log(`${ha.age}`);
console.log(`${ha.address}`);
console.log(`${ha.nickName}`);
ha.name='바바바';
console.log(`${ha.name}\n${ha.age}\n${ha.address}\n${ha.nickName}`);

