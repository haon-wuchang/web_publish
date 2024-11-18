/*   이거는 자바스크립트 맨첨에 한거라 맨처음 노션에 적은곳에 저장해둬
<데이터타입 의 종류>
1. primitive 데이터타입: 기본 데이터타입 -> 콜스텍에 저장
- <primitive 종류> : string number boolean
-ex) 100, "홍", '홍', true, false ...
- let , const

2. Reference 데이터 타입 : 참조 데이터타입 (다른곳에잇는 주소값을 가지고있는거) 에 속하는애들은 다른 종류의 애들도 요소로 가질수잇음
- <Reference >종류 : object, class, object literal{}, array[] ... :데이터양이 많아서 힙에 저장
- ex) let obj = {name : "홍길동", ...} --{}여기안에는 기본데이터타입이 들어가야함  
      let arr = [1,2,3,4..]
      let arrObj = [{},{},{}] 이렇게도 가능하다는거임  js.8 번의 내용임 배열값에 오브젝트리터럴이 들어갈수잇다ㅡ는거임 다른애들도 가능하고
*/


// 배열 생성
let array1 = new Array(2);  //크기만 할당
console.log(array1.length);  //결과값 : 2 로, 크기 2개가 생성된걸 확인 할 수 있음
console.log(array1[0]); // 결과값 : undefined 으로, 아직 값이 없는걸 확인 할 수 있음
console.log(typeof array1);

let array2 = new Array(1,2,3);  //크기 할당 후 데이터 초기화
// => 이렇게 인식함 let array2 = new Array([1,2,3]);
console.log(array2[0]); //결과값 1

let array3 = ['🍰','🍪','🍧'];
console.log(array3[array3.length-1]);  //배열의 마지막 요소 출력 
//결과값 🍧

//💥💥💥💥💥💥💥💥💥💥  여기 이해 잘  해야댄당 !!!
let obj1 = {name:"악동핑", age: 4};
let obj2 = {name:"믿어핑", age: 3};
let objList= [obj1,obj2];
console.log(objList[0]);  //결과값 : { name: '악동핑', age: 4 }
//악동핑 이름을 출력하고싶음
console.log(objList[0].name);  // 결과값 : 악동핑
//인덱스0번지에 가서 이름을 꺼내와야대니까 이렇게 쓴거양
//💥💥💥💥💥💥💥💥💥💥


