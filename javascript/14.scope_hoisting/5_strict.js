/*
    strict mode(엄격 모드)  : nodeJS 기반에서 사용이 된다(React 등)
 
*/


'use strict';
a = 10;
console.log(`a = ${a}`);
// ReferenceError: a is not defined


'use strict';  안쓰면 var 로 선언이 된것이므로 잘 출력이 된다.
a = 10;  //-> var a = 10;
console.log(`a = ${a}`);








