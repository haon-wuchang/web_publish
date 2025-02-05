import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();
router
    .post('/signup',controller.registMember) 
    .post('/idcheck',controller.getIdCheck)
    // 3. 로그인 formData 받아와서 컨트롤러에 넘김
    .post('/login',controller.checkLogin);



export default router;