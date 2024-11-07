// 제어문 의종류에 조건문이 잇는거임 외우외워외워
// - 조건문: if,while, do~while

// if(조건식:비교연산자가 포함되어야함){조건식이 true일때만 실행됨}
// if(조건식){}  이런형식으로 작성

//ex) 참일떄는 파랑색 거짓일때는 빨강색 이렇게 딱 정해지면 if else 를사용
//if(조건식){조건식이참인경우;} else{조건식이 거짓인경우;}

//!!!외워(if else 말고 이거많니씀!!! 삼항 연산자 : (조건식) ? 참인경우:거짓인경우 ;


//조건이여러개일때는 이케씀
//if(조건식1){조건식1이 참일경우실행;} else if(조건식2){조건식2가참인경우실행;} ... else {조건이 여려개인데 모든조건식에 해당되지 않을떄}


//예제 1  입력되는 과일명이 apple 인 경우에는 사과이모지 출력을 하세요
// apple 이외의과일은 경우에는 이름만 출력하세요
let fruit = 'mango';
if(fruit === 'apple') {
    console.log('🍎');
} else {
    console.log(fruit);
}


//위의 예제를 삼항연산자로 만들어보시오
// (fruit === 'apple') ? console.log('🍎'): console.log(fruit);
//true 일떄 다른 값 쓰고싶은데 위에 삼항연산자처럼쓰면  못쓰자나 
//그래서 console.log('🍎'): 이부분을 다른곳에 저장해두고 써도댄댕 =>여기서는 display에 저장한거임
let display = undefined;
(fruit === 'apple') ? (display='🍎'): (display=fruit);
console.log(display);


//예제 2 점심메뉴:피자🍕 ,햄버거🍔   //이모지는 문자임
//요구사항 : 점심메뉴에 피자와 햄버거가 있다. 피자와 햄버거중에서 선택한 메뉴에 따라 이모지가 출력되도록한다
let menu = undefined;
menu ='pizza'
if(menu === 'pizza')
    console.log('🍕');
else 
    console.log('🍔');  //조건에따라 실행하는애들이 한줄 다 차지하면 { } 이거 지워도됌  막 트루일때 애들이 2줄이상이면 {} 이거 지우면안댕


let choice =undefined;
(menu ='pizza') ? choice='🍕':choice='🍔' ;
console.log(choice);


// 학생명이 사필안,범무구,요셉 인지 체크하여 해당하는 경우 이름을 출력하고
//해당하지않는경우 '해당 학생 없음' 으로 출력해주세요
//출력포맷 : 실행결과 ==> '학생이름 ' 

let name = undefined;
let result = undefined;

name='사필안'
if(name==='사필안')
    // {console.log(`실행결과 ==> ${name}`);}  //이케하면 콜스텍이 왓다갓다많이해서 복잡하니꺠 result 만들어서 해준거임
    result =name ;
else
if(name==='범무구')
    // {console.log(`실행결과 ==> ${name}`);}
    result =name ;
else
if(name==='요셉')
    // {console.log(`실행결과 ==> ${name}`);}
    result =name ;
else 
// {console.log(`실행결과 ==> 해당 학생 없음`);}
result ='해당학생없음';

console.log(result);


