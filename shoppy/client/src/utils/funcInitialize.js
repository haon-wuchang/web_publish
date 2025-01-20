// signup 컴포넌트 초기화 작업 =======================================
import React, {useRef} from 'react';

export const initSignup = () => {
        const names = [ 'id','pwd','cpwd','name','phone','emailname'];      
        const namesKr = ['아이디','비밀번호','비밀번호확인','이름','휴대폰번호','이메일주소'];
        const placeHolders = ['아이디 입력 6~20자 이내','비밀번호 입력 10~20자 이내 특수문자포함','비밀번호 재입력',
            '이름을 작성해주세요','휴대폰번호 입력 ( - ) 포함','이메일주소 입력'];
    
        const initData = names.reduce((acc,name) =>{
            acc[name] =''; 
            return acc;   
        },{});    
        const labels = names.reduce((acc,name,index)=>{
            acc[name] = namesKr[index];    
            return acc;
        },{});
    
        const placehol = names.reduce((acc,name,index)=>{
            acc[name] = placeHolders[index]; 
            return acc;
        },{});
        // const [formData, setFormData] = useState(initData);       


    // 여기에 잇는 애들을 다른데서도 쓰려고 return 함 , 만든애들이 여려개라 { }    
    return {names,placehol,labels, initData};
}


export const useInitSignupRefs = (names) => {
    const refs = useRef (
        names.reduce((acc,name)=>{
            acc[name.concat('Ref')] = React.createRef(); 
            return acc;
        },{})
    )
    refs.current['emaildomainRef'] = React.createRef(); 
    
    const msgRefs = useRef(
        names.reduce((acc, name)=>{ 
        acc[name.concat('MsgRef')] = React.createRef();
        return acc;
        },{})
    );
    return {refs,msgRefs};
}






