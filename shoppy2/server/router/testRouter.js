import express from 'express';
import * as controller from '../controller/testController.js';

const router = express.Router();

// router 정보 매핑
router.get('/',controller.getTest);
router.get('/product',controller.getProduct);











export default router;