import express from "express";
import * as controller from '../controller/cartController.js';

const router = express.Router();

router.post('/add',controller.addCart);
router.post('/items',controller.getItems);   //ㄱ-3.





export default router;