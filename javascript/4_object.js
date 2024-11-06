//object : array(=배열)[], JSON {}
let apple = null ;
apple = {
    // 프로퍼티:값, 이 형식이 반복되는거임
    name:'apple',
    color:'red',
    display:'🍎'
} ;
console.log(apple); 

//apple정보중에 display 만 출력되게 하고싶을때는 .으로 구분한다
console.log(apple.name); 
console.log(apple.color); 
console.log(apple.display); 

//orange json 객체 생성 후 결과 출력해주세요
let orange = {
    name:'orange',
    color:'orange',
    display: '🍊'
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);  



//1~5까지 출력
let numberList = [
    1,2,3,4,5  //0번지의 1 1번지의 2 이케됨 맨첫번째가 0부터임
];
console.log(numberList);
console.log(numberList[0]);
console.log(numberList[4]);
console.log(numberList[5]);  //5번지는 없기때문에 undefined 나옴




