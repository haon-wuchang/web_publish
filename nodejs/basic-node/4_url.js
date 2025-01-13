// url
const url = require('url');
console.log('url==>' ,url);

const {URL} = url; // url 객체중에 URL 값을 가져온다는 거임 => 이렇게 사용되는게 구조분해할당임
console.log('URL==>',URL);


const myUrl = new URL('https://nodejs.org/docs/v22.13.0/api/path.html#path');
console.log(myUrl);
console.log(url.format(myUrl));



