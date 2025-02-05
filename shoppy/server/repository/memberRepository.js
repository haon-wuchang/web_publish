import {db} from './db.js';

// 회원가입 - insert
export const registMember = async(formData) =>{  
    const sql = `
                insert into shoppy_member(id,pwd,name,phone,emailname,emaildomain,
                                            zipcode,address,mdate)
                    values(?,?,?,?,?,?,?,?,now())
                `;
    const values = [  
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        null,  
        null
    ];
    const [result,fields] = await db.execute(sql,values);

    return {"result_rows":result.affectedRows};

}


// 아이디 중복체크 => select
export const getIdCheck = async(idData) => {
// export const getIdCheck = async({id}) => { //이렇게바로 id 값 받아와도됨
    // idData = {id:'test1'}
    const sql = `
                select count(id) as result 
                    from shoppy_member 
                    where id = ?
                `;

    const [result,fields] = await db.execute(sql,[idData.id]);
    // const [result,fields] = await db.execute(sql,[id]);  //아디 바로 받아오면 이케 쓰기
    console.log('resususu========',result[0]);
    
    return result[0];
}


// 문법 : execute(sql,[]);


//로그인 
export const checkLogin = async({id,pwd}) => {
    const sql = `
                select count(*) as result_rows
                    from shoppy_member 
                    where id = ? and pwd = ?
                `;

    const [result,field] = await db.execute(sql,[id,pwd]); 
    return result[0];
    // [{result_rows:1}]
}

