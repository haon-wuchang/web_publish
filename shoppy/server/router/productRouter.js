import express from "express";
import * as controller from '../controller/productController.js';

const router = express.Router();

router.post('/new',controller.registerProduct);
router.get('/all',controller.getList);
router.post('/detail',controller.getProduct); //1-3.

export default router;

