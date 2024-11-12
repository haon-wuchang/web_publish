//함수의 실행결과 반환 키워드 : return  !!!!!

function add(a,b) {
    a= parseInt(a);
    b=parseInt(b);   
    return(a+b); // 
    }

let result = add(4,25);
console.log(result);


// 이름,나이를 매개변수로 입력하여 객체(object)를 생성한 후 
//반환하는 함수를 정의하라

function creatObject(name,age){
    let obj = {
        name:name,     
        age:age      // obj :age;
    };
    return obj;        //obj의 주소값이 반환
}      
let resultObj = creatObject('사필안',100);
console.log(resultObj);
console.log(resultObj.name);
console.log(resultObj.age);

console.clear();



// 두 수를 입력받아 곱한값을 반환하는 함수를 작성하라
// 두 개의 수는 0보다 커야함
function multi(a,b) {
    let result = 0; 
    if(a>0 && b>0){
        result = a*b;     
    }                        
    else{
        result ='a와b는 0보다 커야합니다.';
        
    }
    return result;
}
 let multiResult = multi(9,6);
 console.log(multiResult);
 



