//Array built-in 객체의 메소드 익히기  --> mdn 사이트참조

let array1 = [1,2,3,4,5];
console.log(array1[0]);  //array1.0 이렇게는 불가능 JavaScript 구문에서 숫자로 시작하는 속성은 점 표기법 대신 대괄호 표기법을 사용하여 접근해야 합니다.
console.log(array1['0']); //얘는 사용 가능하다 숫자가 문자로'' 감싸져있어도 알아서 숫자로 바꿔줌용 근데 이케는 잘안쓰지
console.log(`array1.length=${array1.length}`);

console.log(`---------1------------`);

// 해당 배열에 빨간사과를 추가하라
let fruits = ['🍈','🍋'];
//1.인덱스에 추가하기
fruits[fruits.length] = '🍎'; 
console.log(fruits);
console.log(`---------2------------`);
//2. push 사용 : 
fruits.push('🍊');  
console.log(fruits);
console.log(`----------3-----------`);
// let a = ['🍇','🥝','🍍','🥭','🍒']; //얘의 인덱스는 4임  //근데 이케는 잘 안쓰는듯
// fruits.push(a);
// console.log(fruits);

//fruits 배열의 전체 key 값 반환 : object.keys(인스턴스명=객체명) => 키들을 배열로 출력함
//배열의 key 값은 인덱스 주소이다.
let keyList = Object.keys(fruits);
//3번째것만 출력
console.log(keyList[2]); //결과값 2
console.log(`----------4-----------`);


// 배열의 마지막 요소 삭제 : pop()                         
console.log(fruits); // 결과값[ '🍈', '🍋', '🍎', '🍊' ]
let deleteFruits=fruits.pop(); 
console.log(deleteFruits);  // 결과값 🍊     
console.log(fruits); // 결과값 [ '🍈', '🍋', '🍎' ]
console.log(fruits.pop());  // 결과값 🍎
        

console.log(`----------5-----------`);

//배열의 맨처음 요소 삭제 : shift()  
// 현재까지의 결과값 [ '🍈', '🍋']
console.log(fruits.shift()); //맨처음은 메론이니까 삭제된 메론 출력 
console.log(fruits);  // 결과값 [ '🍋' ]

console.log(`----------6-----------`);

// 배열 특정 요소 삭제 또는 교체 : splice
//현재까지의 결과값  [ '🍋' ]
fruits.push('🧡','💛','💚','💙','💜');
console.log(fruits);
// 현재 fruits 의 결과값 [ '🍋', '🧡', '💛', '💚', '💙', '💜' ]
console.log(`---------------------`);
//레몬을 딸기로 교체 
fruits.splice(0,1,'🍓'); 
console.log(fruits); //[ '🍓', '🧡', '💛', '💚', '💙', '💜' ]
console.log(`----------딸기하트들-----------`);
//인덱스 1~3번지 요소를 삭제 
fruits.splice(1,3);
console.log(fruits); //[ '🍓', '💙', '💜' ]
console.log(`----------딸기,파란하트,보라하트-----------`);
//인덱스 0번지에 수박 추가  
fruits.splice(0,0,'🍉');
console.log(fruits);  //[ '🍉', '🍓', '💙', '💜' ]
console.log(`---------------------`);



// 배열의 특정 요소를 추출 : slice(start_index, end_index)   | 
        // 
        // 
//[ '🍉', '🍓', '💙', '💜' ] 현재까지 값
fruits.push('🟥','🟧','🟨','🟩','🟦'); 
console.log(fruits); //[ '🍉', '🍓', '💙', '💜', '🟥','🟧','🟨','🟩','🟦']
console.log(`---------slice------------`);
//주황네모과 노란네모를 추출
let sliceFruits= fruits.slice(5,7); 
// 원본 인덱스 : ['🍉', '🍓', '💙','💜', '🟥' , '🟧' ,'🟨' , '🟩' , '🟦']
console.log(sliceFruits);  // [ '🟧' , '🟨'  ]
console.log(fruits); //['🍉', '🍓', '💙','💜', '🟥' , '🟧' ,'🟨' , '🟩' , '🟦']

console.log(`----------노주-----------`);

// 배열 합치기 : concat(배열);
let numberList1 = [1,2,3];
let numberList2 = [4,5,6];
console.log(numberList1.concat(numberList2));  //numberList1 + numberList2
console.log(numberList2.concat(numberList1));  //numberList2 + numberList1

console.log(`----------concat-----------`);

// 배열의 순서 바꾸기 : reverse();
let numbers = [1,2,3,4,5,6];
console.log(numbers.reverse()); //결과값 : [ 6, 5, 4, 3, 2, 1 ]

console.log(`-----------reverse----------`);

// 배열의 중첩 해제하기 : flat();
let fnumbers = [1,2,3,[4,5,[6,7]]];
console.log(fnumbers); // [ 1, 2, 3, [ 4, 5, [ 6, 7 ] ] ]
console.log(fnumbers.flat());  //1레벨 중첩 해제 

console.log(fnumbers.flat(2)); //2레벨 중첩 해제 (중첩2번이라 2적어줘야한다)


// join() 
let textList = ['a','b','c'];
console.log(textList);  // [ 'a', 'b', 'c' ]
console.log(textList.join()); // a,b,c
console.log(textList.join().split(',')); //[ 'a', 'b', 'c' ]



