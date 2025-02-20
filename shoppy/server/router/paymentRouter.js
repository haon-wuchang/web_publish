import e from "express";
import * as controller from '../controller/paymentController.js';

const router = e.Router();

router.post('/qr',controller.paymentKakaoPay);
// router.post('/success',controller.paymentSuccess);



export default router;