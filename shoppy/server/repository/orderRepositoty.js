import {db} from './db.js';

export const getOrderList = async({id}) => {
    const sql = `
            select * from view_orderList where id = ?
                `;

    const [result] = await db.execute(sql,[id]);
    return result;
}

// 2. 조인하는애들은 쿼리가 길자나 그래서우리가 공통적으로 사용하는부분은 view로 만든다 