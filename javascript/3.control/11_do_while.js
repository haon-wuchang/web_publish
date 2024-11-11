// 메뉴선택 
// let flag = false;
// let menu = 1;
// while(flag){
//     //flag가 true 이든 flase 이든 메뉴선택창은 띄우고싶다 이럴떄 do while 사용
//     console.log('1 : 🍕\t 2 : 🍔\t 0 : 종료');
//     if(menu===1){
//         console.log('선택하신 메뉴는 🍕 입니다.');
//         flag=false;
//     }
//     else if(menu===2){
//         console.log('선택하신 메뉴는 🍔 입니다.');
//         flag=false;
//     }
//     else if (menu===0){
//         console.log('선택을 종료합니다');
//         flag=false;
//     }   
// }

//do ~ while : while문의 조건식 체크 전에 무조건 최초로 실행하도록 구현하는 로직에 적용함
/*
    do {
        최초로 한번 먼저 실행되는 실행문;
    } while(조건식){
        실행문;
     }
*/
let flag = false;  //true 이든 flase 이든 상관없이 출력됨
let menu = 1;
do {
    console.log('1 : 🍕\t 2 : 🍔\t 0 : 종료');
    console.log(`[사용법]:숫자를 입력해주세요`);
    
}
while(flag){
    if(menu===1){
        console.log('선택하신 메뉴는 🍕 입니다.');
        flag=false;
    }
    else if(menu===2){
        console.log('선택하신 메뉴는 🍔 입니다.');
        flag=false;
    }
    else if (menu===0){
        console.log('선택을 종료합니다');
        flag=false;
    }   
}

