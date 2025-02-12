import express from "express";
import * as controller from '../controller/productController.js';

const router = express.Router();

router.post('/new',controller.registerProduct);
router.get('/all',controller.getList);
router.post('/detail',controller.getProduct);
router.post('/cartItems',controller.getCartItems);  //5-1

export default router;

