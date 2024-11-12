//module,라이브러리는 공통된 기능을 구현하는 함수들의 집합    !!
// export 키워드를 통해 전역(global)에서 사용할 수 있도록 함  !!!!!
//화살표 함수 형식으로 변환
//const(let) 함수명 = (파라미터...) => {;}



// 구구단 출력하는 함수를 정의
// selectGugudan(strat,end){}; 

// 기본함수출력 1단부터9단까지 출력
export const gugudan = (start,end) =>{
    for(let row=1; row<10; row++){ 
        let output='';           //==>얘도 로컬변수가 값 초기화
        for(let col=1; col<=9; col++){
            output +=`${col} * ${row} = ${col*row}\t` ;
        }
        console.log(output);
    };
}

//구구단 선택 함수 형식 : start end 값 가지고 출력
//입력되는 매개변수start 는 0보다 커야한다
//end 값은 10단 이상은 출력되지 않도록한다

export const selectGugudan = (start,end) => {
    for(let row=1; row<10; row++){ 
        let output='';   
        for(let col=start; col<=end; col++){
            output +=`${col} * ${row} = ${col*row}\t` ;
        }
        console.log(output);
    };
}

//구구단 하나의 단만 출력 함수 형식 : single 단 출력
//입력되는 매개변수는 0보다 커야한다

export const singleGugudan = (dan) => {
        for(let row=1; row<10; row++){ 
                console.log(`${dan} * ${row} = ${dan*row}`);   
        }
    } 
    
//프루츠타워를 출력하는 함수를 정의해라
//fruitsTower('사과이모지',5){};  이케하면 5층짜리 타워임

export const fruitsTower = (emoji,floor) => {
    for(let row=1;row<=floor;row++){
        let output = '';
        for(let col=1; col<=row; col++){
            output += emoji;
        }
        console.log(output);
    }
}


// export {fruitsTower, singleGugudan, selectGugudan}; 이렇게 해도된당