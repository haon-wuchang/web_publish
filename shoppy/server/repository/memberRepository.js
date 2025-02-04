import {db} from './db.js';

// 회원가입
//6. 디비연동해서 결과를 컨트롤러에 알려줌
export const registMember = async(formData) =>{  // 컨트롤러에서 넘어온 req.body 를 formData 이름으로 받음
    // 6-1-1. db 에 shoppy_member 테이블 생성하기 생성후 6-1 진행   
        // cpwd 는 db 에 안만들어 !! 걍 확인용이니까 
    // 6-1 : sql 생성
        // 생성한 테이블에 formData 내용 insert 
        // vales 는 값 계속 바뀌니까 ? 사용
        // 이 ? 들은 formdata 적힌 내용을 통해 만든다 
    const sql = `
                insert into shoppy_member(id,pwd,name,phone,emailname,emaildomain,
                                            zipcode,address,mdate)
                    values(?,?,?,?,?,?,?,?,now())
                `;
    const values = [  // 순서지켜서 값 넣어야함 !!!!
        formData.id,
        formData.pwd,
        formData.name,
        formData.phone,
        formData.emailname,
        formData.emaildomain,
        null,  // zipcode , address 는 null 허용이라 우선 값 안넣을꺼라 null
        null
    ];

    // 6-2 : db 객체를 이용하여 sql 실행 후 결과 가져오기 execute() 함수사용
    const [result,fields] = await db.execute(sql,values);
    // console.log(result);
    // console.log(fields);
    // 콘솔결과값
    // ResultSetHeader {  => result값
    //     fieldCount: 0,
    //     affectedRows: 1, 💨 하나의행이 shoppy_member 에 insert 됐다고 알려주는거임 (insert,update,delete 할떄 여기 확인 !!1)
    //     insertId: 0,
    //     info: '',
    //     serverStatus: 2,
    //     warningStatus: 0,
    //     changedRows: 0
    //   }
    //   undefined  => fields값

    
    
    // 6-3 : 컨트롤러에 결과값 리턴 ( 자바스크립트느 결과값을 {} 로 받음!)
        // 결과값인 affectedRows 을 가져와야한다 
    return {"result_rows":result.affectedRows};

}

