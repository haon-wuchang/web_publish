//객체 생성자 함수 - 객체 모델링(ex.반려동물, 동물병원)
// dog,cat,rabbit .. 의 객체 생성자 함수를 정의하고 호출하라
// 속성(attribute=모델링할떄의 용어, property) : name, color ...
// 메소드 : display('🐱'), eat(🐱가 먹는다), sleep(🐱가 잔다)  🐶🐰

function Animal (emoji,color) {
    //field
    this.emoji = emoji;
    this.color = color;

    //method
    this.display = () => console.log(this.emoji);
    this.eat = () => console.log(`${this.emoji} 가 먹는다`);  
    this.sleep = () => console.log(`${this.emoji}가 잔다`);
    }


const dog = new Animal ('🐶','brown');
const cat = new Animal ('🐱','cheese');
const rabbit = new Animal ('🐰','white');

cat.display();
cat.eat();
cat.sleep();

dog.display();
dog.eat();
dog.sleep();

rabbit.display();
rabbit.eat();
rabbit.sleep();

