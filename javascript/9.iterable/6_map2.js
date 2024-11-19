//Map 클래스 생성
//

const fList = new Map([[ 1, 'one' ],[ 2, 'two' ]]);  //1=key 'one' =value   
console.log(fList);
console.log(fList.get(1)); // 결과값 one
// 내부적으로 구조분해할당을해서 one 이라는 결과값이 나오게 됐다.

//fList size 확인 
console.log(`size = ${fList.size}`); // size = 2
console.log(`----------ㅎㅎ-----------`);
//데이터 추가
fList.set(3,'three'); 
// fList.set([4,'four']); //set 메소드는 [] 배열로 값을 넣을시에는 구조분해할당이 안된다 그래서 다 key로만 받게됨 
// fList.set([[4,'four'],[5,'five']]);
console.log(fList); //Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
console.log(`----------1-----------`);

//데이터확인과 출력
console.log(fList.has(3));  //true
if(fList.has(3)) console.log(fList.get(3)); //three
console.log(`---------2------------`);

//fList의 모든 key값 출력
console.log(fList.keys());  // [Map Iterator] { 1, 2, 3 }
console.log(`----------3-----------`);

//fList의 모든 value 값 출력
console.log(fList.values());  //[Map Iterator] { 'one', 'two', 'three' }
console.log(`-----------4----------`);

// entries
let iteratorObj = fList.entries();
console.log(iteratorObj);
// 결과값 [Map Entries] { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }

console.log(iteratorObj.next());
// 결과값  { value: [ 1, 'one' ], done: false }
//done:false가 출력 안되게 하려면 next().value 를 사용하면된다.

console.log(iteratorObj.next().value);
// 결과값  [ 2, 'two' ]
console.log(`-----------5----------`);

//순회작업 : forEach 사용
fList.forEach((element) => console.log(element));  //forEach에 처음에 쓴값(element)은 무조건 value 값만 가져오게됨 
console.log(`-----------6----------`);  // 결과값 : value 값인 one two three 가 출력된다

fList.forEach((value,key) => console.log(value,key));
//value 가먼저나오고 key 가 그뒤에 출력된다
console.log(`-----------7----------`); // 결과값 : one 1 two 2 three 3

fList.forEach((value,key,map) => console.log(value,key,map));
//forEach() 는 value,key,map 값 이 3개만 받을수있다 뒤에 뭘 추가한다고해서 값이 더 나오지는 않는다.

console.log(`-----------8----------`);

//순회 : for...of
for(let element of fList)console.log(element);  // [key, value] 형태로 출력됨
/*
결과값
[ 1, 'one' ]
[ 2, 'two' ]
[ 3, 'three' ]
*/
console.log(`-----------9----------`);

for(let key of fList.keys())console.log(`key = ${key}`);  //key 만 출력
for(let value of fList.values())console.log(`value = ${value}`); //value 만 출력
for(let entry of fList.entries())console.log(typeof entry, `entries = ${entry}`); //entires 사용
// for(let entry of fList.entries())console.log(typeof entry, `entries = ${entry.value()}`); //이케는안댐
console.log(`---------------------`);

//데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList); // Map(2) { 2 => 'two', 3 => 'three' }
console.log(`---------------------`);

//맵 전체삭제 clear()
fList.clear();
console.log(fList); // Map(0) {}










