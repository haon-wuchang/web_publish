
let a = '100.4';
// a = parseInt(a);
a = parseFloat(a);
console.log(typeof a);
console.log(a);

//uri 인코딩 ex) http://www.naver.com  url 문자열을 주소로 바꾸는 것
let uri = 'http://www,naver.com';  //이렇게만하면 걍 문자임
let encode = encodeURI(uri); //이걸로 url 들어갈수있게 한것이다.
console.log(encode); 

// uri 디코딩   url 주소를 문자열로 바꾸는것
let decode =decodeURI(encode);
console.log(decode);

