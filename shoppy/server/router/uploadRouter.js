import express from "express";
import * as controller from '../controller/uploadController.js';
import * as MultipleController from '../controller/uploadMultipleController.js';

const router = express.Router();
router.post('/',controller.fileUpload);
router.post('/multiple',MultipleController.fileUploadMultiple);


export default router;
