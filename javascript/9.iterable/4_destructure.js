// 구조 분해 할당 =destructure 


let numbers = [1,2,3,4,5];
let aa =numbers; //이렇게 작성하면 주소값 복사하는거임
let [a,b, ...nList]= numbers;
//numbers 가 배열이니까 let [] 이렇게 구조 동일하게 만들어줌

console.log(aa);  // 결과값 [ 1, 2, 3, 4, 5 ]
console.log(a); // 결과값 1
console.log(b); // 결과값 2
console.log(nList); // 결과값 [ 3, 4, 5 ]


//hong 객체의 정보를 각각의 변수로 정의하라
let hong = {
    name : '홍길동',
    age : 30,
    address : '산골짜기'
}
let {name,age,address} = hong;  //key의 이름과 동일하게 맞춰줘야 한다.

console.log(name);
console.log(age);
console.log(address);

/* 구조분해할당을 안할시에는 이렇게 코드가 길어진다 그래서 비효율적
    let name = hong.name;
    let age = hong.age;
    let address = hong.address;
*/


//함수의 반환값을 받아 구조 분해 할당 진행
function createEmoji() {
    return {
        fname : 'apple',
        color : 'red',
        emoji : '🍎'
    };
}

let {color,emoji,fname,price=1000} = createEmoji();  
console.log(price);                     
// 값 초기화 안하고 선언만 하면 언디파인 나옴 -> price 말하는거임 
// 그래서 price=1000;이라는 정확한값을 넣어주면 댄당




//과일리스트를 구조분해할당으로 정의해라

let Flist = ['🍋','🍑','🥥'];
let [lemon,peach,coconut] = Flist ;

console.log(lemon);
console.log(peach);
console.log(coconut);

