import express from "express";
import * as productController from '../controller/productController.js';

const productRouter = express.Router();

productRouter.get('/all',productController.getAll);
productRouter.get('/:pname',productController.getPname);





export default productRouter;