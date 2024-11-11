//function 은 데이터타입이 object 이다 (값을 메모리힙에 가지고있따)
function add(a,b) {
    console.log(a+b);
    
}

console.log(add);
let sum=add;   //이케는 잘 사용안해
console.log(sum);

add(1,2);
sum(1,2);

