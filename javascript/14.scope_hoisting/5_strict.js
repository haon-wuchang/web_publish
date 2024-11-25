/*
    strict mode(엄격 모드)  : nodeJS 기반에서 사용이 된다(React 등)
    - 자바스크립트가 가지고잇는 규칙을 잘 지키는지 
*/

// <use strict>
// 하나하나 키워드를 엄격하게 적었는지 확인하려고 use strict 를 적는거임 let const로 잘 적으라고
//use strict 에서는 키워드가 없으면 안된다(키워드= let const)
//nodeJS 에서 키워드를 정확히 체크하기 위해서 사용된다
// 'use strict';
a = 10;
console.log(`a = ${a}`);
// ReferenceError: a is not defined


// 'use strict'; 를 안쓰면 var 로 선언이 된것이므로 잘 출력이 된다.
a = 10;  //-> var a = 10;
console.log(`a = ${a}`);








