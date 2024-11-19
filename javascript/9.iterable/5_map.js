/* Map 
*/

let fruitMap = new Map();

//요소 추가 
fruitMap.set('apple','🍎'); 
fruitMap.set('apple','🍎'); //동일한 내용들어가도 하나만 저장됨
fruitMap.set('lemon','🍋'); 

console.log(fruitMap); 
// 결과값 Map(2) { 'apple' => '🍎', 'lemon' => '🍋' }

//요소 출력
console.log(fruitMap.get('apple'));  //🍎
console.log(fruitMap.get('lemon'));  //🍋
//요소 존재 여부 확인
console.log(fruitMap.has('lemon'));  //true
console.log(fruitMap.has('orange')); //false

if(fruitMap.has('lemon')) 
    fruitMap.delete('lemon');

console.log(fruitMap);  
// 결과값 Map(1) { 'apple' => '🍎' } 레몬이 삭제되고 애플만 남은모습






