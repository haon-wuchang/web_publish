//구구단 3단ㄷ부터 5단까지 출력 3열 9행
let start = 4;
let finish = 9;
for(let j=1;j<10;j++){
    let output='';
    for(let i =start;i<=finish;i++){
        output +=`${i} * ${j} = ${i*j}\t`;
    }
    console.log(output);
    
}

//별찍기 출력  3줄만 1 11 111 이케
for(let i =1;i<4;i++){
    let rows='';
    for(let j =1;j<=i;j++){
        rows+=`*`;
    }
    console.log(rows);
    
}



console.clear();

/* 사과이모지 출력  d이케 ㄱㄱ for if 같이 쓴느건강 col이 row의 진행값과 똑같다
🍏
🍏🍏
🍎🍎🍎
🍏🍏🍏🍏
🍏🍏🍏🍏🍏 
*/

for(let row =1;row<6;row++){
    let output='';
    for(let col =1; col<=row; col++){
        if(row===3){
            output+=`🍎`;
        }
        else {
            output+=`🍏`;

        }
    }
    console.log(output);
    
}
