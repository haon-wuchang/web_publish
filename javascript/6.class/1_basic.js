//: class 
/*
    class 클래스명 {
        //constructor(생성자) 함수
            constructor () {
              //filed
                this.필드명 = 값;
                ...
              }
        //method     method 에는 this 안씀 

    }

*/

class Animal {
    //생성자 함수
    constructor(emoji,color) {        
        this.emoji = emoji;
        this.color = color ;
    }
    //메소드
    display = () => console.log(this.emoji);
    
}

const cat = new Animal ('😽','yellow');    

cat.display();


