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

//1-5. 레파지토리 만들기
export const getProduct = async(pid) => {  //1-5-0. 컨트롤러가 보낸 pid 받아오기 변수로 보냈으니 pid 로만 받은거임 {pid} 이렇게 객체로 받으면 안돼.(변수로 넘기면 변수로 받고 객체({})로 넘기면 객체로 받기!!!1)
    // console.log('pid===>',pid); // 1-5-0. 우선 잘 넘어오는지 확인

    //sql
    const sql = `
            select 
                pid,
                pname,
                price, 
                description,
                upload_file as uploadFile,
                source_file as sourceFile,
                pdate
            from shoppy_product 
            where pid=?
                `;
    //execute
    let [result,field] = await db.execute(sql,pid);   // sql 이 select 일때는 무조건 이차원배열로 결과값 받아옴 그래서 구조분해할당으로 1번째 배열만 필요하니까 받아오는거임

    //return
    return ;
}