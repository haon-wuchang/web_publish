//: method
//


const apple = {
    name : '사과',
    color :'red',
    emoji : '🍎',
    display : function () {console.log('🍎');},  
    getName : function () {console.log(this.name);},
    getColor : function () {console.log(this.color);},
    getEmoji : function () {console.log(this.emoji);}
}
//
//

console.log(apple);
console.log(apple.name);
console.log(apple.color);
apple.getName();
apple.display();
apple.getColor ();
apple.getEmoji ();  
