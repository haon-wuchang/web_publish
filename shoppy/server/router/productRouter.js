//e-2.
import express from "express";
import * as controller from '../controller/productController.js';

const router = express.Router();

router.post('/new',controller.registerProduct);
// 12.
router.get('/all',controller.getList);

export default router;

