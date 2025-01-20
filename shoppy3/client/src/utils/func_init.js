import React, {useRef} from 'react';


    export const initSignup = () => {
        const names = ['id','pwd','cpwd','name','phone','emailname'];
        const namesKr = ['아이디','비밀번호','비밀번호확인','이름','휴대폰','이메일주소'];

        const initForm = names.reduce((acc,name)=>{
            acc[name] = '';
            return acc;
        },{}); 

        const labels = names.reduce((acc,name,index)=>{
            acc[name] = namesKr[index];
            return acc;
        },{});
        
        return{names, initForm, labels};
    }

    export const useInitSignupRef = (names) => {
        const refs = useRef(names.reduce((acc,name)=>{
            acc[name.concat('Ref')] = React.createRef();
            return acc;
        },{})
        );
        refs.current.emaildomainRef = useRef(React.createRef());

        return{refs};
    }