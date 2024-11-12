//콜백함수는  !!!!!!!//비동기식 프로미스?에서 많이사용

//??????

// const add=(a,callback)=>{
//     callback(a);  //callback에 add2의 주소가잇음
// }
// const add2=(x)=>{
//     console.log(x);
    
// }
// add(100,add2()); //==>이게 콜백함수 (함수안에서 호출되는 함수)

// console.clear();

//??????






const job = (a,callback) => {
    callback(a);
}
const print = (a) => console.log(a);  //얘호출하면 24번줄로 다시 돌아감 그후 28번줄로감

job(100,print);

const job2=(a,b,callback)=>{
    callback(a,b);

}
const printAll = (a,b)=>{
    console.log(a);
    console.log(b); //얘 실행하고 37번줄로 간다음 46번으로가서 값출력   
}

job2(100,200,printAll); //printAll 이거는 callback 주소임



console.clear();

//setTimeout 함수 호출
/
setTimeout((second)=> console.log(`${second} 초 후 실행`),3000,3);       




