function buttonClick (op) {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    if(num1===''){
        alert(`값을 입력해주세요`);
    }else if(num2===''){
        alert(`값을 입력해주세요`);
    }else{
        calculatorButton(parseInt(num1),parseInt(num2),op);
        }
         
    }

function calculatorButton(a,b,op){
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