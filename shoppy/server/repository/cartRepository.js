import {db} from './db.js';

// 장바구니 추가
export const addCart = async({id,cartList}) => {
    let result_rows = 0;  
    const result = await Promise.all(    
        cartList.map(async(item)=>{   
                const values = [item.size, item.qty, id, item.pid];
                
                const sql = `
                    insert into shoppy_cart (size, qty, id, pid , cdate) 
                            values( ?,?,?,?, now())
                            `;
                const [result] = await db.execute(sql,values); 
                // console.log('result row ' ,result.affectedRows);
                return result.affectedRows;                
        })
    )
    // console.log('result=',result);    
    result_rows = result.reduce((acc,cur) => acc+ cur , 0);
    return {'result_rows':result_rows};
    // console.log({'result_rows':result_rows});
}
