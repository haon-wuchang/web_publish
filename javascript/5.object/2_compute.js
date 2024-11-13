
const person = {
    name: '사필안',  
    age : 20,
    job : '개발자'
}
const fruits = {
    name: '사과',
    emoji : '🍎'
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.job);

console.clear();


//C(create)R(read)U(update)D(delete) 기능 =>db 연동 할수잇는지 물어보는거랭





//arrow 함수로 변경 const 함수명 = (파라미터 ) => { 실행문 }  //한줄이면 {},return 삭제
 const setValue = (object, newkey, value) => object[newkey] = value;

 const getValue = (object, key) => object[key];
    
 const updateValue = (object, key, newValue) => object[key] = newValue;
    
 const deleteValue = (object, key) => delete object[key] ;

// => 새로운 키값에 '' 나 "" 꼭 붙여야댕!!
setValue(person, 'address', '서울시');    
setValue(fruits, 'color', 'red'); 
console.log(person);
console.log(fruits);


console.log(getValue(person, 'name'));
console.log(getValue(fruits, 'color'));


updateValue(person, 'name', '범무구');
updateValue(fruits, 'color', 'yellow');
console.log(person);
console.log(fruits);


deleteValue(person,'age');
deleteValue(fruits,'name');
console.log(person);
console.log(fruits);
