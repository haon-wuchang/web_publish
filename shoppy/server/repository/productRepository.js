import {db} from './db.js';

export const registerProduct = async(formData) => {  
    const sql = `
                insert into shoppy_product(pname,price,description,
                                    upload_file,source_file,pdate)
                    values(?,?,?,?,?,now())
                `;
    const values = [
        formData.productName,
        formData.productPrice || 0,
        formData.productDescription || "",
        formData.upload_file || null,
        formData.source_file || null,
    ];   // || = 또는 의미 임  ( 상품등록창에서 해당내용 비웠을때 || 뒤에있는값으로 대체되어서 저장된다는거임)
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
                    concat('http://localhost:9000/', upload_file->>'$[0]') image,
                    source_file,
                    pdate
                from shoppy_product
                `;
    const [result] = await db.execute(sql);

    return result;
}

export const getProduct = async(pid) => {  
    // console.log('pid===>',pid);
    //sql
    const sql = `
           select 
            pid,
            pname as name,
            price, 
            description as info,
            upload_file as uploadFile,
            source_file as sourceFile,
            pdate,
            concat('http://localhost:9000/',upload_file->>'$[0]') as image,
            json_array(
                concat('http://localhost:9000/',upload_file->>'$[0]'),
                concat('http://localhost:9000/',upload_file->>'$[1]'),
                concat('http://localhost:9000/',upload_file->>'$[2]')
            ) as imgList, 
            json_arrayagg(
                concat('http://localhost:9000/',jt.filename) 
            ) as detailImgList
        from shoppy_product , 
            json_table(shoppy_product.upload_file,'$[*]' 
                columns(filename varchar(100) path '$')) as jt 
        where pid=?
        group by pid
                `;
    //execute
    const [result,field] = await db.execute(sql,[pid]);   
    // console.log(result); 

    //return   
    return result[0];   
}


//5-3.
export const getCartItems = async({pids}) => {
    const sql = `
    
                `;

    const [result] = await db.execute(sql,pids);

    return ;
}