
//예제 구구단 2단ㅇ을 출력 2 * 1 =2 ... 2* 9 =18

for (let i = 1 ; i<10 ; i++){
    console.log(` 2 * ${i} = ${i * 2 }`);
}
console.clear();  


//예제 구구단 2~9단까지 출력 (9행 8열)

for(let i =1;i <10;i++){
    let rows = '';  //가로로 출력하려면 이렇게 중간 결과를 넣는 곳을 무조건 만들고 해
    for(let j =2; j <10; j++){
        rows += `${j} * ${i} = ${j*i}\t`;
    }
    console.log(rows);
}
console.clear();  

//예제 별표찍기

for(let i = 1 ; i < 6 ; i++){
    let row = '';
    for(let j = 1; j <= i ; j++){   //행의 순번과 별표찍히는 숫자가 같음 2행이면 2개 이런식(j <= i)
        row += `💥`;
    }
    console.log(row);
}
console.clear();  

// 별 거꾸로 찍기      
for(let i = 5 ; i >= 1 ; i--){
    let row = '';
    for(let j=i ; j >= 1 ; j--){  
        row += `💥`;
    }
    console.log(row);
}

