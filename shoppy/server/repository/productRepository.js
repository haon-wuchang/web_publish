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