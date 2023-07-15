import { Router } from "express";
import {
  postProdToCart,
  getProductsCart,
} from "../controllers/cart.controllers";

const cartRouter = Router();

cartRouter.post("/addToCart", postProdToCart);
cartRouter.get("/productsCart", getProductsCart);

export default cartRouter;
