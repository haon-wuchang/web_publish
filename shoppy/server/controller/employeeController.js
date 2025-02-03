import * as repository from '../repository/employeeRepository.js';


export const getEmployeeAll = async (req,res) => {
    const result = await repository.getEmployeeAll(); // db연동결과(employees) 여기서 받을라고 ()한거임
    // result 는 json 파일이라 res.json(result); 이케보냄

    res.json(result);
    res.end();
}
// db 연동은 무조건 비동기처리!!!!  await async
//send() 와 json() 함수는 둘다 같이 사용불가 하나만 써야댐!


