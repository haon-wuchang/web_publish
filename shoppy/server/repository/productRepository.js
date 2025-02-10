import {db} from './db.js';

export const registerProduct = async(formData) => {  
    const sql = `
                insert into shoppy_product(pname,price,description,
                                    upload_file,source_file,pdate)
                    values(?,?,?,?,?,now())
                `;
    // mysql 에서는 json 으로 쓰고 다른db는 다른이름으로 쓰일수잇움
    //11-1. 여기에서 업로드파일이랑 소스파일만 배열형태로 넘어온다
    //11-2.워크벤치 가서 데이터 넘어오는 거 varchar 에서 json 으로만 바꾸기
    //12. 상품등록페이지에서 등록하고 db까지 잘 저장되는지 확인하기
    const values = [
        formData.productName,
        formData.productPrice,
        formData.productDescription,
        formData.upload_file,
        formData.source_file,
    ];
    //execute
    const [result] = await db.execute(sql,values);

    return {"result_rows":result.affectedRows};
}



    //13. 이미지 여려개등록하면 맨처음꺼만 화면에 나오게 작업 ( 워크벤치 고)
    // 14. 워크벤치에서 수정한거 sql 적용
    //15. 올드파일 삭제작업하기 => 업로드멀티플컨트롤러 ㄱ
export const getList = async() => {
    const sql = `
                select 
                    pid,
                    pname as name,
                    price,
                    description as info,
                    concat('http://localhost:9000/', upload_file->>'$[0]') image,
                    source_file,
                    pdate
                from shoppy_product
                `;
    const [result] = await db.execute(sql);

    return result;
}
