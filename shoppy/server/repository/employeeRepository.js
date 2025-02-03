
import {db} from './db.js';

export  const getEmployeeAll = async() => { 
    // 실행 순서 
    // 1.sql 쿼리 작성  
    const sql = `
            select *
            from employee
            where emp_id = ?
                `; 
    const dbData = ['s0001'];

    // 2.이 쿼리를 db.js 의 커넥션을 이용하여 실행 한 후 결과를 가져오기
    const [rows,fields] = await db.execute(sql,dbData)// 다리이용해서 db.js 가서 sql 
                        .then(result =>result)  
                        // 얘가 2차원배열이라 구조분해할당으로 받아올수잇음[[],[]] 첫번째배열이름을 난ㄴ rows 라고해서 얘 리턴해서 받으면댐
                        .catch(error => console.log(error));

    // 3.호출한곳(컨트롤러)에 결과 리턴
    return rows;
}









