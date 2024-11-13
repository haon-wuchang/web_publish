
class Fruit {
    constructor(name,color,emoji) {
        this.name = name ;
        this.color = color;
        this.emoji = emoji;
    }
    static makeFruit = () => {
        //복숭아를 생성해서 리턴하시오
        return new Fruit('peach','pink','🍑'); 
    }
    display = () => {console.log(`${this.name},${this.color},${this.emoji}`);

    }
}

let apple = new Fruit ('apple','red','🍎');
apple.display();
let peach = Fruit.makeFruit();
// apple.makeFruit(); //=>이렇게는 실행이 불가능하다 
console.log(peach);
peach.display();




