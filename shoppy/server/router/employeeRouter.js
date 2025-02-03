import express from "express";
import * as controller from '../controller/employeeController.js';

const router = express.Router();

router.get('/',controller.getEmployee);








export default router;



