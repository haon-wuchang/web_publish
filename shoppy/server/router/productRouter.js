import express from "express";
import * as productController from '../controller/productController.js';

const productRouter = express.Router();

productRouter.get('/product/all',productController.getAll);





export default productRouter;