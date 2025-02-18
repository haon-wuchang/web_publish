import express from "express";
import * as controller from '../controller/cartController.js';

const router = express.Router();

router.post('/add',controller.addCart); 
router.post('/items',controller.getItems);   
router.post('/count',controller.getCount);
router.put('/updateQty',controller.updateQty);
router.delete('/deleteItem',controller.deleteItem); 


export default router;