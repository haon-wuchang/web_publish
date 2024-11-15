//Number 클래스들의 메소드  |초록애들 다 매소드양
//!!인 애들은 잘쓰는거니까 외웡
// 
let a =100;
let b= new Number(100);
console.log(typeof a, typeof b);
console.log(a.valueOf()===b.valueOf());  //근데 a한테는 valueOf 거의 안씀



let num = 123000;
let num2 = new Number(1245432535);  
console.log(num.toLocaleString());
console.log(num2.toLocaleString());



console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
let num3 = 123.45;
console.log(num3.toFixed());  //toFixed 정수로 반올림-->얘는 잘안씀



