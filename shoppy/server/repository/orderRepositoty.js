import {db} from './db.js';

export const getOrderList = async({id}) => {
    const sql = `
        select 
            sm.id,
            sm.name,
            sm.phone,
            concat(sm.emailname, '@', sm.emaildomain) as email,
            sm.zipcode,
            sm.address,
            sp.pid,
            sp.pname,
            sp.price,
            sp.description as info,
            concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image,
            sc.cid,
            sc.size,
            sc.qty
        from shoppy_member as sm,  
            shoppy_cart as sc , 
            shoppy_product as sp
        where sm.id = sc.id and sc.pid = sp.pid and sm.id = ?
                `;

    const [result] = await db.execute(sql,[id]);
    return result;
}