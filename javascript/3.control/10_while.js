//while문 :  ,
/*
    while(조건식true flase 로 나오게){
        실행문;
        }

*/

//1부터 5까지 출력---이런건 for문이 효율적임 
// i=3이되면 for문 종료
for(let i =1;i<6;i++){
    if(i ===3)break;
    console.log(i);
}

// console.clear();

//while문 : 1~5까지 출력
// i=3이되면 while문 종료
let count =1;
while(count<6){
    if(count===3)break;
    console.log(`count=${count}`);
    count++;
    //count++;에서 ; 이거끝나야count++ 이 2로 넘어가는거임
}

// 메뉴선택 
let flag = true;
let menu = 1;
while(flag){
    console.log('1 : 🍕\t 2 : 🍔\t 0 : 종료');
    //하나의번호를 선택하면 while 루프를 자연스럽게(break사용하지않고) 종료하고싶음
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