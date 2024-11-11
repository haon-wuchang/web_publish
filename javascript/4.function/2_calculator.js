// 계산기 기능 구현

function calculator(a,b,op){
    a=parseInt(a);
    b=parseInt(b);
    switch (op){
        case '+':
        console.log(a+b);
        break;
        case '-':
        console.log(a-b);
        break;
        case '*':
        console.log(a*b);
        break;
        case '/':
        console.log(a/b);
        break;
        case '%':
        console.log(a%b);
        break;
        default :
        console.log(`처리할수없는 연산자입니다`);    
    }
}
//html input 에 입력하는 것들은 다 문자임 !!!

calculator(1,2,'+');
calculator(10,2,'-');
calculator(1,2,'*');
calculator(10,2,'/');
calculator(10,2,'%');