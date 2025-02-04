import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();
//4. signup 에서 post 로 보냇으니까 받을때도 post로 !!!!! 
router.post('/signup',controller.registMember); // 얘는 걍 넘기는거니까 함수에 괄호붙이면 절대안댕





export default router;