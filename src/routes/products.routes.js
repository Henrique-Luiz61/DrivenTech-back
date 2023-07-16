import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import {
  deleteProducts,
  getProducts,
  postProducts,
} from "../controllers/products.controllers.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);
productsRouter.use(validateAuth);
productsRouter.post("/products", postProducts);
productsRouter.delete("/products", deleteProducts);

export default productsRouter;
