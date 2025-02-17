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


//장바구니 전체 조회
export const getItems = async({id}) => {
    //ㄱ-6. 장바구니,고객,상품정보 테이블 다 조인하기
    const sql = `
            select sc.cid,	
                    sc.size,
                    sc.qty,
                    sm.id,
                    sm.zipcode,
                    sm.address,
                    sp.pid,
                    sp.pname,
                    sp.price,
                    sp.description as info,
                    concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image
                from shoppy_member as sm, 
                    shoppy_cart as sc , 
                    shoppy_product as sp
                where sm.id = sc.id and sc.pid = sp.pid
                        and sm.id = ?
                `;
    //ㄴ. ? 에 로컬스토리지의 user_id 넘겨주기 =>카트에서 로컬스토리지꺼 가져와서 서버로 넘기기
    const [result] = await  db.execute(sql,[id]);

    return result;
}

//1-2.
// 장바구니 수량 조회
export const getCount = async({id}) => {
    const sql = `
            select count(*) as count 
                from shoppy_cart 
                where id = ? ;
                `;
    const [result] = await db.execute(sql,[id]);

    return result[0];
}

// 3-8.
// 장바구니 같은상품,같은사이즈인 경우 수량 업데이트 
export const updateQty = async({cid}) => {
    const sql = `
    
                `;
    const [result] = await db.execute(sql,[cid]);

    return {'result_rows' : result.affectedRows};
}
