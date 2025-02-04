import * as repository from '../repository/memberRepository.js';

// 회원가입
// 5.
export const registMember = async(req,res) => {
    // console.log('reqqqqqqq========',req.body); // post 니까 req.body ! // req=body = formData
        // shoppy signup 부분 내용진행후 회원가입버튼 누르면 cmder 에 결과 찍힘
    const result = await repository.registMember(req.body); // 7. db연동 인서트한 결과 받음
    res.json(result);
    res.end();
}



// 7.컨트롤러가 결과를 res 를 통해서 signup 으로 감





// 에로우펑션일때는 async 를 파라미터 앞에 붙임 그냥함수는 함수명 앞에 붙임