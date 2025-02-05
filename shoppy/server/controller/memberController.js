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

//
export const checkLogin = async(req,res) => {
    let result = await repository.checkLogin(req.body); // result = {result_rows:1}

    if(result.result_rows === 1){
        const token = jwt.sign({'userId':req.body.id}, 'wayvLDnt7F'); 
        result = {...result,'token':token};
        console.log(result);  
    }    
    res.json(result);
    res.end();
} 




// 에로우펑션일때는 async 를 파라미터 앞에 붙임 그냥함수는 함수명 앞에 붙임