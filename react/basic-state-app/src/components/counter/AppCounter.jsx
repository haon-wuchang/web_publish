import Counter from './Counter.jsx';
import './counter.css';
import {useState} from 'react';

export default function AppCounter() {
    const [totalNum,setTotalNum] = useState(0);

    //2.totalNum는 자식인 카운터 컴포넌트에서 이벤트가 발생했을때 결과값을 부모가 가지고잇는 함수인
    //핸들클릭에게 값을 넘겨준다 그러면 토탈넘이 변경되게 된다
    const handleClick = (num, type) => {
        if(num < 10 && type==='증가'){     //3. if문으로 값 체크후에 토탈넘 값을 출력한다
            setTotalNum(totalNum+1);
        } else if(num > 0 && type==='감소') {
            setTotalNum(totalNum-1);
        } //토탈넘은 기본값이0이니까 +1 을 해줘야 값이 늘어난다
        
//handleClick함수의 num인자는 Counter컴포넌트에서 number로 받는다
//handleClick함수의 type Counter컴포넌트에서 '감소'혹은'증가' 받는다
        
    }

    return(
        <div className="counter-container">
            <Counter total={totalNum} click={handleClick}/>
            <Counter total={totalNum} click={handleClick}/>
        </div>
    );
}

//1.자식컴포넌트인 counter에서 각가 어떤 클릭이벤트가발생햇는지 부모인 해당 컴포넌트(앱카운터)에서 알아야겟징 그래야 토탈값을 바꿀수잇으니까



// 해당 컴포넌트 내용은 쇼핑몰 장바구니 같은곳에서 사용될수잇다

