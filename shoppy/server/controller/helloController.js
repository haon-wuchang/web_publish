// 10. 일반 자바스크립트 함수로 생성하면 됨
// 애로우펑션으로 만들기
export const getHello = (req,res) => {
    // 여기서 브라우저로 요청하고 받고 하는거임
    console.log('controller ');
    res.send('server-router-controller');
    res.end(); // 아무것도 보내지않고 종료 
    
}

export const getHelloParam = (req,res) => {
    console.log(req.params.id);
    res.send(req.params.id);
    res.end();
    
}







