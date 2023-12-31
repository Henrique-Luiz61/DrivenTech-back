import { Router } from "express";
import userRouter from "./user.routes.js";
import productsRouter from './products.routes.js'
import cartRouter from "./cart.routes.js";

const router = Router();

router.use(userRouter);
router.use(productsRouter);
router.use(cartRouter);

export default router;