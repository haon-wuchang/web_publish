import { useState } from "react";

export default function Counter({total, click}) {
    const [number, setNumber] = useState(0);

    function increment() {
        (number < 10) ? setNumber(number+1): alert('더이상 값을 늘릴 수 없습니다');
        click(number, '증가'); 
    }

    function decrement() {
        (number > 0) ? setNumber(number-1): alert('더이상 값을 줄일 수 없습니다');
        click(number, '감소');
    }


    return(
        <div className="container">
            <div>
                <span className="number">{number} / </span>
                <span className="total-number">{total}</span>
            </div>
            <button type="button" 
                    className="button"
                    onClick={increment}>
                        증가</button>
            <button type="button" 
                    className="button"
                    onClick={decrement}>
                        감소</button>          
        </div>
    );
}
// 1.
// span 태그가 어떻게 변하는가 상태관리를 한다 => useState
// ADD 누르면 숫자가 바뀌게 되니까 상태관리를 해서 바뀐값을 착착 나오게해야지

// 2.
//기존의 html 에서의 onclick은 이렇게 실행이 불가능한데
// jsx 파일에서의 onClick 함수는 jsx 안에서 실행되는 자바스크립트 구문이라서 바로 함수를 작성하고 실행되는 콜백함수를 넣어줄수있따

// 3.increment 함수 정의, decrement
// increment 함수뒤에 괄호없이 준다 -이거 어디서 정리한적이 잇어 함수뒤에 괄호 유무의미

//4 감소버튼눌럿을때 마이너스 부분까지는 못가게 체크를 하고싶다
// 증가버튼도 10까지만 갈수잇게 하고싶다
// => 삼항연산자로 내용 작성하기

// 5. 첫번쨰 카운터와 두번쨰 카운터의 토탈값을 출력하고싶다 <span class=total-number>
// 토탈값은 appCounter 에서 정의해야한다
