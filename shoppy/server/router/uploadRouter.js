// 7.
import express from "express";
import * as controller from '../controller/uploadController copy.js'

const router = express.Router();
router.post('/',controller.fileUpload2);


export default router;
