//💥쥰내즁요해💥💥💥💥map :  배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 !!새로운 배열을 반환(return)!!합니다.
// 내가 return 작성안해도 얘 혼자 알아서 해줌
//순회메소드가 적용되는 map 함수는 = 처리한 파라미터인자로 콜백함수를 입력받아 , 처리한 결과를 새로운 배열객체로 생성하여 반환하다
//     .map(()=>);
let numbers = [1,2,3,4,5,6];
let fnumbers = [1.001,2.002,3.03,4.04,5.05,6.06];

//number 배열요소에 각각 10을 곱한 결과 출력
let numbers2 = numbers.map((item) => item*10);  //[10,20,30,40,50,60]
//forEach는 순회만함 <->map은 순회를 하면서 새로운 배열의 객체로 리턴함
console.log(`numbers2 = ${numbers2}`);

//fnumbers 배열요소의 소숫점을 절삭하여 정수로 출력
let fnumbers2 = fnumbers.map((item) => Math.floor(item)); // [ 1, 2, 3, 4, 5, 6 ]
// let fnumbers2 = fnumbers.map(Math.floor); // ()는 공통된내용이 들어가니까 삭제가능하다 | 이렇게도 사용 가능 근데 위에꺼로 써라
console.log(fnumbers2);

// 배열의 요소로 Object literal{} 값이 있는 경우 처리방법
let objects = [
{name : '유리', age : 6},
{name : '짱구', age : 5},
{name : '철수', age : 7}
];
objects.forEach((obj, index) => { console.log(index, obj);});  //index 값도 달라고 index 적은거임

// let a = {};
// a['name']='유리';
// console.log(a);

//예제 [{유리:'name' , 6:'age'} ,...] 이런형태로 출력하고싶음=> key(=>name) 값을 value로 치환  =>map 사용
// let a= {key:value}
// a[key]
// let objects2 = objects.map(() => {})  //이케만함녀 배열만 만들어짐 [] 
// let objects2 = objects.map((obj) => {
//     let resultObj = {};  //중간 결과값
//     return resultObj;});  //이렇게하면 이거 만들어짐[{}]  

    // let objects2 = objects.map((obj) => {
    //     let resultObj = {};  //중간 결과값
    //     resultObj[obj.name] = obj.value; //[key값]
    //     return resultObj;});  
    //     console.log(objects2);
//[ { '유리': undefined }, { '짱구': undefined }, { '철수': undefined } ] =>value 값을 안줘서 언디파인뜸

let objects2 = objects.map((obj) => {
    let resultObj = {};  //{} 여기에 내용들어가야대니까 빈괄호로 만듬
    resultObj[obj.name] = obj.value; //key값에 value 값을 넣는거임 ->name
    resultObj[obj.name] = 'name';  //'name'을 value값에 넣어줌 ->name
    resultObj[obj.age] = obj.value; //key값에 value 값을 넣는거임 ->age
    resultObj[obj.age] = 'age'; //'age'를 value값에 넣어줌  ->age
    return resultObj;});  
    console.log(objects2);
//[{ '6': 'age', '유리': 'name' },{ '5': 'age', '짱구': 'name' },{ '7': 'age', '철수': 'name' }] 그래서 이케 나옴용


console.log(`---------------------`);


