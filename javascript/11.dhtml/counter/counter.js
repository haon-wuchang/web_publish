//counter 증가와감소를 하나의 함수에서 진행
function counter (flag) {
    let number = document.querySelector('#number').textContent;
   if(flag ==='increment'){
    document.querySelector('#number').textContent = ++number;
   } else{
    if(number>0)
        document.querySelector('#number').textContent = --number;    
   }  
}





//increment : counter 증가
//증가시키려면 html에 잇는 0 값을 가져와야행 #number
function increment() {
    let number = document.querySelector('#number').textContent;
    if(number<10){
        document.querySelector('#number').textContent = ++number;
    } 
}

//decrement : counter 감소 ,   -값은 출력안되게 하라
function decrement() {
    let number = document.querySelector('#number').textContent;
    //document.querySelector('#number').textContent 이게 html 0 값을 가져온거자나 
    //우리는 이 0값을 늘리고 줄이고 할거라서 쟤한테 -- 나 ++ number 를 써준거야
    if(number>0){
        document.querySelector('#number').textContent = --number;  
    }
}












