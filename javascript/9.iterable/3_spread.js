// ... (spread operator = 전개구문) !!!!

//1. function 함수명 (...param)
function add(...n){   
    let sum = 0;  //배열 0번쨉 부터 더한당  --????
    for(number of n) sum += parseInt(number); 
    return sum;
}

let sum = add(1,2,'3');
console.log(`sum = ${sum}`);


//2. [...iterable]
let fruit1 = ['🍅','🍓'];
let fruit2 =['🍋','🍍','🍌'];

//fruit1과 fruit2 사이에 키위 추가 🥝
let fruit3 = fruit1.concat('🥝',fruit2);  //concat 보다는 ... 많이 쓴다
let fruit4 = [...fruit1, '🥝', ...fruit2];   

console.log(`fruit3 = ${fruit3}`);
console.log(`fruit4 = ${fruit4}`);


// 3. {...iterable}
const hong = {
    name:'홍길동',
    age : 20,
    address : '서울'
};

const hongUpdate = {
    ...hong, 
    job : '개발자'
};


console.log(hongUpdate);


