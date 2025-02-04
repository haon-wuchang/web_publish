import * as repository from '../repository/memberRepository.js';

// 회원가입
// 5.
export const registMember = async(req,res) => {
    // console.log('reqqqqqqq========',req.body); // post 니까 req.body ! // req=body = formData
        // shoppy signup 부분 내용진행후 회원가입버튼 누르면 cmder 에 결과 찍힘
    // 7. db연동 인서트한 결과 받음 => 여기 result 는 레파지토리의 리턴값을 받음
    const result = await repository.registMember(req.body); 
    // 8.컨트롤러가 결과를 res 를 통해서 signup 으로 감
    res.json(result);  // 자바스크립트
    res.end();
}

// ㄹ. 아디중복체크
export const getIdCheck = async(req,res) => {
    // console.log('id====',req.body); // 값 잘 가져오는지 먼저 확인
    const result = await repository.getIdCheck(req.body);
    res.json(result);  // 이결과가 funcvalidate 아디체크 부분으로 넘어가게된다
    res.end();
}






// 에로우펑션일때는 async 를 파라미터 앞에 붙임 그냥함수는 함수명 앞에 붙임