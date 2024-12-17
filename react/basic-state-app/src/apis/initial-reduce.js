/********************* 
Form 초기화 이름 생성 함수
************************/
export const initFormNames = (initArray) => {
    const init = initArray.reduce((acc,key)=> { 
        acc[key] = '';  
        return acc;  
    },{});
    //{} 객체를 넘겨주기 위해서는 return init; 을 해줘야한다
    return init;
}


