//f.
import {db} from './db.js';

export const registerProduct = async(formData) => {  // req.body 데이터가 많으니까 구조분해할당말고 걍 데이터 통으로 받기
    //sql
    const sql = `
                insert into shoppy_product(pname,price,description,
                                    upload_file,source_file,pdate)
                    values(?,?,?,?,?,now())
                `;
    const values = [
        formData.productName,
        formData.productPrice,
        formData.productDescription,
        formData.upload_file,
        formData.source_file,
    ];
    //execute
    const [result] = await db.execute(sql,values);

    //return => sql 에 따라서 return 이 좀 달라진댕
    return {"result_rows":result.affectedRows};
}



//14. db 전체 상품 리스트 조회 
export const getList = async() => {
    // 16.json 에 잇는 데이터와 이름 맞추기 위해 sql 에서 as 로 명칭 변경하기 (왜냐면 이전에 json 데이터 임의로 만들어서 작업해놔서 db 이름과 안맞음)
    {/* 17. 이미지 경로 수정해주기 */}
    const sql = `
                select 
                    pid,
                    pname as name,
                    price,
                    description as info,
                    concat('http://localhost:9000/', upload_file) image,
                    source_file,
                    pdate
                from shoppy_product
                `;
    const [result] = await db.execute(sql);

    return result;  // 14-2.result = [{디비데이터1},{디비데이터2},...]
}
// 14-1. 
// sql 이 select 쿼리이면 이중배열로 결과값 들어옴
// [[{디비데이터1},{디비데이터2},...],[컬럼명들]]