import express from "express";
import { getMain } from "../controller/mainController.js";

const router = express.Router();

router.get('/',getMain);



export default router;