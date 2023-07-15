import { Router } from "express";
import {
  postProdToCart,
  getProductsCart,
} from "../controllers/cart.controllers";

const cartRouter = Router();

cartRouter.post("/addToCart", postProdToCart);
cartRouter.get("/addToCart", getProductsCart);

export default cartRouter;
