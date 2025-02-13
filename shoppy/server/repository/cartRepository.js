import {db} from './db.js';

// 장바구니 추가
export const addCart = async({id,cartList}) => {
    let result_rows = 0 ;  //c-6.
    cartList.map(async(item)=>{   //c-2. cartList 는 배열이라 여기잇는 데이터 1개 가져와서 sql 만들어서 넘기고 다음꺼 맵돌아가서 걔꺼도sql 만들고 ,,,
            //c-4.필요한데이터가져와서 배열로만들기  item = {} 임
            const values = [item.size, item.qty, id, item.pid];
            // console.log('values',values); // c-5.필요한 값 잘가져오는지 확인
            
            const sql = `
                 insert into shoppy_cart (size, qty, id, pid , cdate) 
                        values( ?,?,?,?, now())
                        `;
    
            const [result] = await db.execute(sql,values);          
            // console.log('result row ' ,result.affectedRows);
            result_rows = result.affectedRows; // c-7
                
    });
    return {'result_rows':result_rows};
}// 콜백함수안에서 await 잇으니까 얘한테도 async 붙여줘야댐
//  c-6. const [result] 는 콜백함수 안에서만 살 수 때문에 return 에 result를 사용하지 못한다 그래서 이값을 전역변수를 선언해서 여기 넣어준다