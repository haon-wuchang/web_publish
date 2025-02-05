import {db} from './db.js';

// 회원가입 - insert
export const registMember = async(formData) =>{  
    // 6-1 : sql 생성
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


// 7.  로그인 - select 쿼리 사용
// 8. 컨트롤러에서 넘어온 req.body 를 loginData 로 받음 
    // 넘어온 테이터 {id:'test',pwd:'1234'} 이케 넘어옴 아까 콘솔로 찍어봣자넝
export const checkLogin = async({id,pwd}) => {
    // 9. 레파지토리의 3단계 작업 진행 
    const sql = `
                select count(*) as result_rows
                    from shoppy_member 
                    where id = ? and pwd = ?
                `;

    const [result,field] = await db.execute(sql,[id,pwd]); // 9-1.얘의 실행결과는 2차원 배열이니까 구조분해할당으로 받기
            // field 는 구지 안써도댕 어차피 안쓰자나 
    return result[0];
    // [{result_rows:1}]
}

