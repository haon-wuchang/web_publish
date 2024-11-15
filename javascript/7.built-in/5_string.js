
let name = 'lee';
let sname = new String('lee');
console.log(typeof name, typeof sname);
console.log(name===sname);
console.log(name===sname.valueOf());

console.clear();

let text = 'hello javascript';
console.log(text.charAt(0)); 
console.log(text[0]);  


console.log('welcome '.concat(text));


// let text = 'hello javascript'; 
console.log(text.indexOf('l'));




//전부 대문자로 전부 소문자로 toUpperCase();   toLowerCase();
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//아래예시처럼 이럴때 사용됨
//입력폼 에서는 대소문자 구분하지않지만-->   toLowerCase();   -->DB 저장시 전부 소문자로 저장 || 이게 규정이라면 

//  substring(start,end); 
console.log(text.substring(0,3));
console.log(text.substring(6,10));




console.log(text.slice(0,3));
console.log(text.slice(6));
console.log(text.slice(-3));  //맨뒤부터 3자리 가져옴




text = '             JavaScript!            ';
console.log(text.trim());
text = '             Java       Script!            '; 
console.log(text.trim());

console.clear();


const fruit = '🥝,🥥,🍐'; //
const fruitArray = fruit.split(',');
console.log(fruit);
console.log(fruitArray);  




