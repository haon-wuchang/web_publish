import * as repository from '../repository/orderRepositoty.js';

export const getOrderList = async(req,res) => {
    
    const result = await repository.getOrderList(req.body);
    res.json(result);
    res.end();
}   