import {db} from './db.js';

export const registerProduct = async(formData) => {  
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

    return {"result_rows":result.affectedRows};
}




export const getList = async() => {
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

    return result;
}
