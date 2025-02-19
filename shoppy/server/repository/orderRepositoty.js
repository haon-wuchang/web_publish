import {db} from './db.js';

export const getOrderList = async({id}) => {
    const sql = `
            select * from view_orderList where id = ?
                `;

    const [result] = await db.execute(sql,[id]);
    return result;
}

