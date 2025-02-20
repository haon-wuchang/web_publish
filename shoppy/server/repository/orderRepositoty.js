import {db} from './db.js';
//전체 주문 정보 가져오기 
export const getOrderList = async({id}) => {
    const sql = `
            select * from view_orderList where id = ?
                `;

    const [result] = await db.execute(sql,[id]);
    return result;
}

// 4.
export const addToOrder = async(formData) => {

    const result = await Promise.all(    
        formData.orderList.map(async(item)=>{   
                const values = [
                    item.qty, 
                    item.size, 
                    formData.totalPrice,
                    formData.tid,
                    formData.type,
                    formData.id, 
                    item.pid,
                ];
                
                const sql = `
                    insert into shoppy_order (qty,size, tprice, tid, type, id, pid , odate) 
                            values( ?,?,?,?, ?, ?, ?,  current_date())
                            `;
                const [result] = await db.execute(sql,values); 
                // console.log('result row ' ,result.affectedRows);
                return result.affectedRows;                
        })
    )
    let result_rows = result.reduce((acc,cur) => acc+ cur , 0); //애 const 로 불가 
    return {'result_rows':result_rows};
}