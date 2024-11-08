//제어문
//-반복문 :for , while

// for :  정확한 반복 횟수를 알고있을때 사용하는게 좋다  외워라꼬꼬꼮
//for <--> Array \ for 가나오면 array 가 무조건 나와야하고 array나오면 for 가 무조건 나와야한다

//for(초기값;조건식;증감식){실행문;}
// for(초기값:몇번부터 시작하는지(선언문형식으로 작성);조건식;증감식){        증감식: ++ , --
//  실행문;(조건식이 true 인 경우 실행이된다. ->조건식이 false 가되면 빠져나옴)
// }
/**

 */

//예제 1 
// 숫자1~5 까지 반복해서 출력하라
for( let i=1 ; i < 6 ; i++ ){
    console.log(i);   
}
// console.log(i);  //--> i는 for밖에서는 살수없어서 이렇게못씀


//예제2
//숫자배열을 출력하시오
let numberList = ['🥨','🥯','🥪'];  
console.log(`numberList.length=${numberList.length}`); 
for(let i=0 ; i<=numberList.length-1 ; i++ ){ //i 를 또쓸수잇엉 위에있는 i쟤는 for 안에서만 사니까
    console.log(numberList[i]);   //numberlist에 잇는 index값 가져오는겅야
}

//과일리스트 출력
let fruitList = ['apple','orange','lemon'];
let emojiList = ['🍎','🍊','🍋'];  //위에 적은 순서대로 적어줘야댕 사과오렌지레몬순

let length = fruitList.length-1;

for(let i=0; i <=length; i++){  
    //lemon만 출력하고싶음
    let fruit = fruitList[i];  
    let  emoji = emojiList[i];
    if(fruit==='lemon'){
        console.log(emoji);        
    }
}





//while : 종료하는 시점을 정확하게 알고있을때 사용하는게 좋다
//true,false 값을 통해 체크를 한다
//트루값을 계속 실행하다가 조건이 펄스가 되면 끝난당




//변수선언하고 사용이안되는애들(dead code)은 회색으로 나옴