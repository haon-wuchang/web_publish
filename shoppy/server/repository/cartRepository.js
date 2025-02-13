import {db} from './db.js';

// 장바구니 추가
export const addCart = async({id,cartList}) => {
    let result_rows = 0;   //c-11.
    //c-8. Promise.all 로 감싸기
    const result = await Promise.all(  // c-9. map 이니까 배열로 리턴된다 [1,1,~~~]  프로미스결과값을 받을 변수 선언
        cartList.map(async(item)=>{   //c-2. cartList 는 배열이라 여기잇는 데이터 1개 가져와서 sql 만들어서 넘기고 다음꺼 맵돌아가서 걔꺼도sql 만들고 ,,,
                //c-4.필요한데이터가져와서 배열로만들기  item = {} 임
                const values = [item.size, item.qty, id, item.pid];
                // console.log('values',values); // c-5.필요한 값 잘가져오는지 확인
                
                const sql = `
                    insert into shoppy_cart (size, qty, id, pid , cdate) 
                            values( ?,?,?,?, now())
                            `;
            // 콜백함수안에서 await 잇으니까 map한테도 async 붙여줘야댐
                const [result] = await db.execute(sql,values); // c-7.얘는 promise형태로 실행된다 => 이 promise 관리는 Promise.all 이 하기때문에 얘로 감싼다
                // console.log('result row ' ,result.affectedRows);
                return result.affectedRows;//c-6.                
        })
    )
    // console.log('result=',result);     // c-10.
    result_rows = result.reduce((acc,cur) => acc+ cur , 0); //c-11.
    return {'result_rows':result_rows};
    // console.log({'result_rows':result_rows}); // c-12.
}
