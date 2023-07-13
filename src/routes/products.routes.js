import { Router } from "express";
import { validateAuth } from '../middlewares/validateAuth.js'
import { getProducts } from "../controllers/products.controllers.js";

const productsRouter = Router();

productsRouter.use(validateAuth)
productsRouter.get('/products', getProducts)

export default productsRouter;