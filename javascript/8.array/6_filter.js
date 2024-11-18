//filter  💥💥💥💥💥💥💥💥💥💥💥
// 주어진 배열의 일부(=필터조건에 만족하ㅡㄴ애들)_에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.
//filter도 순회매소드이다.

//예제1)   단어길이가 6 이상인 경우만 출력하라
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words.filter((item) => { item.length > 6}));   //결과값 []     얘 한줄이라 {} 지워도됨
//데이터값이 안나온이유 =콜백함수(item)에서 처리하는로직{item>6}블럭앞에 return을 적어줘야한다 💥💥💥 이거 이해못하면 잣댐
console.log(words.filter((item) => { return item.length > 6}));  
// 결과값 [ 'exuberant', 'destruction', 'present' ] 

//💥💥💥콜백함수에 {} 를 추가하면 반드시 return 키워드를 붙여서 값을 반환한다 💥💥💥
console.clear();



//예제2 ) 5이상의 숫자를 배열로 출력하라
let numbers = [1,2,3,4,5,6,7];

//1. forEach 로 작성
// let array =[];
// numbers.forEach((x)=>{
//     if(x>=5){
//         array.push(x);
//     }
// })
// console.log(array);

//2.filter 로 작성
// let array2 = numbers.filter((x) => { return x>=5});   //[] filter 니까 새로운 배열 하나 ㅁ나들어짐
let array2 = numbers.filter((x) =>  x>=5);   // 위에처럼 써도되는데 한줄이니까 return 이랑 {} 지운거임
console.log(array2);

//예제3 ) 3보다 큰 값만 출력하라
let number2 = [1.54,2.75,3.14,4.45,5.94,6.2,7.71];
console.log(number2.filter((x)=>x>3));

//number2의 모든 값을 반올림한 후, 3보다 크거나 같은 값을 출력하라
// console.log(number2.map((x)=> Math.round(x)).filter((x)=>x>=3));
console.log(number2.map(Math.round).filter((x)=>x>=3)); //이케도 됨

console.clear();

//예제4) 아이템을 검색하여 갯수를 리턴
//방법1
// function searchItem (array,items) {
//     let result= array.filter((item)=> item===items);
//     return result;
     
// };

//방법2
function searchItem (array,items) {
    return array.filter((item)=> item===items).length;};

//방법3
// function searchItem (array,items) {
//     let count = 0;
//     array.forEach((item)=>{
//         if(item===items) count++;
        
//     })
//     return count ; 
// }

let fList = ['🧡','💛','💚','💙','🧡'];  
let nList = [1,2,4,3,5,6,9,11,4,25,4];  

//'🧡', 4 가 몇개인지 
console.log(`${searchItem(fList,'🧡')} 개`);
console.log(`${searchItem(nList,4)} 개`);  

console.log(`-----------------------------------`);
//흠 이거는 map 꺼만 정리하던가

let object = [
    {name : '유리', age : 6},
    {name : '짱구', age : 5},
    {name : '철수', age : 7}
    ];
    object.forEach((obj, index) => { console.log(index, obj);});  //index 값도 달라고 index 적은거임



//예제 ) 유리,짱구 이름을 가진 학생 정보만 배열 출력 
//1. map 으로 출력 
let objects1 = object.map((obj) => {
    let result={};   //얕은복사하나 만들어야함
    if(obj.name ==='유리'){
        result=obj;
    } else if(obj.name==='철수'){
        result=obj;
    }
    return result;
});
// [{name : '유리', age : 6},{name : '철수', age : 7}] 이케 나와야댄다
// [ { name: '유리', age: 6 }, {}, { name: '철수', age: 7 } ]  가운데에 {} 는 짱구값이 이걸로 나온거임 이렇게 나오면 지저분하니까
//{}까지 지워주는 filter 를 사용한다  map은 전체적으로 적용되서 짱구가 {} 나온거임
// 전체에 적용하려면 map,  부분적으로 적용하려면 필터 사용

console.log(objects1);

//2. filter 로 출력






