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
                select * from view_cartList where id = ?
                `;
    //ㄴ. ? 에 로컬스토리지의 user_id 넘겨주기 =>카트에서 로컬스토리지꺼 가져와서 서버로 넘기기
    const [result] = await  db.execute(sql,[id]);

    return result;
}

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
export const updateQty = async({cid,type}) => { //11-4. type 받아오기
    console.log('cid',cid, 'type',type); // 11-5. 콘솔에 잘나오는지 우선 확인 
    // 11-6. 삼항만들고 이거 sql 에 수정해서 넣기
    const str = (type === 'increase') ? 'qty = qty +1' : 'qty = qty -1'  ;
    
    const sql = `
                update shoppy_cart 
                    set ${str}
                    where cid = ?
                `;
    const [result] = await db.execute(sql,[cid]);

    return {'result_rows' : result.affectedRows};
}


//장바구니 해당 상품 삭제 (선택해서 여러개 삭제할때는 where in (?,?,?,,,,, 이케하면댐))
export const deleteItem = async({cid}) => {
    const sql = `
                delete from shoppy_cart  
                    where cid = ?
                `;
    const [result] = await db.execute(sql,[cid]);
    return {'result_rows' : result.affectedRows};
}