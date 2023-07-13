import { Router } from "express";
import { validateAuth } from '../middlewares/validateAuth.js'
import { deleteProducts, getProducts, postProducts } from "../controllers/products.controllers.js";

const productsRouter = Router();

productsRouter.use(validateAuth)
productsRouter.get('/products', getProducts)
productsRouter.post('/products', postProducts)
productsRouter.delete('/products', deleteProducts)

export default productsRouter;