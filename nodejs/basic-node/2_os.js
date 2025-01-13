// p.122
//  require() : 내장객체임, 노드js에서 제공하는 내장모듈을 호출할떄 사용하는 함수이다
// 자바스크립트의 import 와 동일한 역할을 하는게 노드js 의 require 이다

// 노드가 설치된 피씨의 정보이다
const os = require('os');
console.log(os.type());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.totalmem());


