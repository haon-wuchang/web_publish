import * as repository from '../repository/memberRepository.js';
import jwt  from 'jsonwebtoken';

// 회원가입
export const registMember = async(req,res) => {
    const result = await repository.registMember(req.body); 
    res.json(result); 
    res.end();
}

export const getIdCheck = async(req,res) => {
    // console.log('id====',req.body); // 값 잘 가져오는지 먼저 확인
    const result = await repository.getIdCheck(req.body);
    res.json(result);  // 이결과가 funcvalidate 아디체크 부분으로 넘어가게된다
    res.end();
}

//4. 로그인 컨트롤러 만들기
export const checkLogin = async(req,res) => {
    // console.log(req.body);  //5. post는 req.body 로 데이터가 넘어옴 , 콘솔로 잘 넘어오는지확인
    //6. 레파지토리 값 가져올 변수 선언 레파지토리는 db 갓다오니까 시간 많이걸려서 await async
    // 6번정리시 let 으로 처음부터 만들게 적어놔 (let 으로해야 밑에서 다시쓸수잇어서 const에서 let 으로 변경
    let result = await repository.checkLogin(req.body); // result = {result_rows:1}

    // 10. 레파지토리의 result 를 받아옴 ( 클라이언트-로그인페이지로 넘겨줌)
    if(result.result_rows === 1){
        const token = jwt.sign({'userId':req.body.id}, 'wayvLDnt7F'); 
        result = {...result,'token':token};
        console.log(result);  
    }    
    res.json(result);
    res.end();
} 




// 에로우펑션일때는 async 를 파라미터 앞에 붙임 그냥함수는 함수명 앞에 붙임