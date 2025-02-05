import * as repository from '../repository/memberRepository.js';
// ㄴ. 토큰임포트
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
    // ㅁ. let 으로해야 밑에서 다시쓸수잇어서 const에서 let 으로 변경
    let result = await repository.checkLogin(req.body); // result = {result_rows:1}

    // 10. 레파지토리의 result 를 받아옴 ( 클라이언트-로그인페이지로 넘겨줌)
    // ㄴ. jwt 토큰 생성해서 result객체에 추가해서 로그인페이지에 전송 {result_rows:1, token: ~~~~~~}
    // const token = jwt.sign({'userId':req.body.id}, '토큰키값'); //ㄷ.토큰생성 (id만 가져와서 체크함 비번은 노출되면 위험하니까 가져오지않음)

    // ㄹ. if문으로 rusult 값이 있는지확인 후 토큰만들어야함, 그냥 만들면 로그인실패했을때도 생기니까 안댐 !!
            // ㅂ.기존의 리절트결과받고 토큰값 추가함 
    if(result.result_rows === 1){
        const token = jwt.sign({'userId':req.body.id}, '5KldLlOVja'); 
        result = {...result,'token':token};
        console.log(result);   // ㅅ.콘솔로 db 에있는 데이터 잘찍는지 확인
    }
    // ㅂ. if 문으로체크한 result 를 받아옴 (로그인성공이면 토큰값합쳐진 result받음) 얘를 로그인페이지에 넘김
    res.json(result); // 제이슨으로 넘어오니까 제이슨으로 받기
    res.end();
} 




// 에로우펑션일때는 async 를 파라미터 앞에 붙임 그냥함수는 함수명 앞에 붙임