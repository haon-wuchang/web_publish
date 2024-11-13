

function Fruit (name,color,emoji) {
    //field
    this.name = name;
    this.color = color;
    this.emoji =emoji;
    //method
    // this.display = function () { console.log(this.emoji);}
    this.display = () =>  console.log(this.emoji);  //화살표함수로 바꿈
}

const apple = new Fruit('apple','red','🍎'); 
const orange = new Fruit('apple','coral','🍊'); 
const lemon = new Fruit('apple','yellow','🍋'); 
console.log(apple);
console.log(orange);
console.log(lemon);





//apple : propurty - name , color : method - display() => emoji 출력
// const apple = {
//     name : 'apple',
//     color : 'red',
//     display : function () {console.log('🍎');}
// }
// //orange : propurty - name , color : method - display() => emoji 출력
// const orange = {
//     name : 'orange',
//     color : 'coral',
//     display : function () {console.log('🍊');}
// }
// //lemon : propurty - name , color : method - display() => emoji 출력
// const lemon = {
//     name : 'lemon',
//     color : 'yellow',
//     display : function () {console.log('🍋'); }
// }


