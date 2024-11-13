
class Fruit {
    //constructor
    #name;  
    constructor(name,color,emoji) {
        //field
        this.#name =name ;
        this.color=color;
        this.emoji=emoji;
    }
        //method
    display = () => console.log(`${this.#name},${this.color},${this.emoji}`);
}

const apple = new Fruit('apple','green','🍏');
apple.display();                      //얘는 내부에서 접근하는거라 전부 다 출력이 되야한다
console.log(apple.name);              //이게 외부에서 접근하는것이다
console.log(apple.color);
console.log(apple.emoji);

console.clear();

//사번(private #),사원명,부서명
//info() 메소드 호출시 사원 모든정보 출력
class Employee {
    #emplonumber    //얘에 새로운값을 넣고싶으면 메소드를 통해서만 ㄱㄴ 하다| private는 내부에 적은 메소드로만 접근이 ㄱㄴ
    constructor(emplonumber,ename,dept) {
        this.#emplonumber=emplonumber;
        this.ename=ename;
        this.dept=dept;
    }

    info = () => {console.log(`${this.ename},${this.dept}`);}    
    infoAll = () => {console.log(`${this.#emplonumber},${this.ename},${this.dept}`);}    
}

const person1= new Employee('124','멋사','경영지원부');
person1.info();  //일반정보만 출력 :사원명 부서명만 출력
person1.infoAll(); //모든정보출력
console.log(person1.emplonumber);
console.log(person1.ename);
console.log(person1.dept);

