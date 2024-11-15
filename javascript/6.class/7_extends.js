//class간의 상속관계
/* e 동물원에서 동물관리프로그램을 생성하려고한다
    흰색사자,회색사자,흰색호랑이,회색호랑이,푸들,말티즈 가 있따.
    객체모델링=> Lion, Tiger ,Dog Class
*/

class Animal {      //name.color.emoji.taste
    constructor(name,color,emoji,taste){
        this.name=name;
        this.color=color;
        this.emoji=emoji;
        this.taste=taste;
    }
    display = () => console.log(`${this.name} : ${this.emoji}`);
    sleep = () => console.log(`${this.name}이(가) 잠을 잔다`);
    eat = () => console.log(`${this.name}이(가) 먹는다`);
    
}

class Lion extends Animal {    //lion class는 animal class의 자식이다 => class 클래스명 extends 부모클래스명
    constructor(name,color,emoji,taste){
        super(name,color,emoji,taste);  
    } 
}

class Tiger extends Animal{   //Tiger에 age라는 field 가 추가됨
    constructor(name,color,emoji,taste,age){
        super(name,color,emoji,taste);
        this.age=age;
    }
    getAge = () => console.log(this.age);
    
} 
class Dog extends Animal{   //dog 에는 종류라는 필드추가됨
    constructor(name,color,emoji,taste,type){
        super(name,color,emoji,taste);
        this.type=type;
    }  
    getType = () => console.log(this.type);
    
} //메모리힙에 Animal은 3개 생성됨 자식마다 하나씩임 근데 맨위에 classAnimal은 따로 생성되지않음ㄴ

//동물원에서 동물을 관리하는 클래스 생성
//속성 : #type(어떤동물인지), #동물의객체(pyu,trust,okidoki)
//메소드 : setter getter
class Zoo {
    static LION=1;  //const LION=1; 상수로 정의하는거라 대문자로적음
    static TIGER=2;  //static은 객체생성안해도 됨
    static DOG=3;

    #type
    #animal
    constructor(type,animal){
        this.#type=type;
        this.#animal=animal;
    }
    get type() {return this.#type;}
    get animal() {return this.#animal;}

    set type(type) {this.#type=type;}
    set animal(animal) {this.#animal=animal;}
}

const pyu = new Lion('뿌뿌핑','흰색','🦁','육식');
const trust = new Tiger('믿어핑','회색','🐯','육식',3); 
const okidoki = new Dog('꾸래핑','흰색','😺','육식','푸들');  
pyu.display(); pyu.sleep(); pyu.eat();
trust.display(); trust.sleep(); trust.eat(); trust.getAge(); 
okidoki.display(); okidoki.sleep(); okidoki.eat(); okidoki.getType();
//pyu.display() 하게되면 name,color,emoji,taste 이런게 자식인 lion한테 없으니까 부모한테가서 가져옴

const zoo = new Zoo(Zoo.LION, pyu);
console.log(zoo.type, zoo.animal);

