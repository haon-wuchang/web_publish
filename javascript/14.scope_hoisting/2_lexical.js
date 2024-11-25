/*



*/
{    // 전역 스코프  : 얘는 보통 생략한다  , 변수,실행코드만 전역스코프에 들어감
    let a = 10;    // a= 전역변수
    console.log(`a = ${a}`);  
    {
        let b = 20;    // b,c 는 로컬변수
        console.log(`b = ${b}`);
            {
                let c = 30;
                console.log(`c = ${c}`);
                console.log(`a = ${a}`);       // a는 전역변수라 해당파일 어디에서는 출력됨
                
            }   // level 2   스코프
    }   // level 1  스코프
}  // 

/* 전역스코프칸에는 
전역에서 선언된
     let a = 10;    
    console.log(`a = ${a}`); 이거 두개만들어감

레벨1스코프칸에ㄴ도 변수, 실행코드만 들어간다 
let b = 20;    
        console.log(`b = ${b}`);


레벨2스코프칸에는
 let c = 30;
                console.log(`c = ${c}`);
                console.log(`a = ${a}`);      
                이케 들어감 





콜스텍이 실제 일을 담당한다.
자바스크립트는 싱글스레드형식이라 창고를 만들어서 실행 그래서 비동기가 생긴거임




////////////////////////////////////////////////
var 는 전역변수임  var aa= 100;
var로 작성한 변수aa는 전역스코프칸에도 생성되고  a=10, aa  // var는 전역스코프에 저장될때 할당만하고 값은 저장되지않음
레벨2칸에도 에도 내용이 들어감 aa=100, b=10
그래서 콘솔로그로 aa 를 찍으면 레벨1칸에서 값을 우선 찾고 없어서 전역스코프칸에서 찾음 근데 전역스코프에는 값은 저장이 안돼서 undefined로 뜸
그래서 변수선언시 var는 거의 안쓴다
var로 선언한 객체는 선언은 전역에서 하고 값이 할당되는건 해당하는 레벨칸에만 된다
let a =10;
    {
        let b =10;
        console.log(aa);
       {
            let c =20;
            var aa =100;
       }
    }


*/

console.log(`---------------------------------`);
//var 예제

{ 
    let a = 10;   
    console.log(`a = ${a}`); 
    console.log(`aa = ${aa}`); 
    {
        let b = 20;    
        var aa =100;
        console.log(`b = ${b}`);
        console.log(`aa = ${aa}`);
            {
                let c = 30;
                console.log(`c = ${c}`);
                console.log(`a = ${a}`);      
                
            }   // level 2   스코프
    }   // level 1  스코프
}  // 전역스코프


