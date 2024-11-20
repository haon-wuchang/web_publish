function inputNumber () {
    let num1 = document.getElementById('#number1').value;
    let num2 = document.getElementById('#number2').value;
    if(num1===''){
        console.log(`값을 입력해주세요`);
        
    }else if(num2===''){
        console.log(`값을 입력해주세요`);
    }else{
        calculator(a,b,op);
        }
         
    }

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
    }
}