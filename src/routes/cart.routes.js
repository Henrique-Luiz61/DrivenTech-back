import { Router } from "express";
import {
  postProdToCart,
  getProductsCart,
  postCheckout,
} from "../controllers/cart.controllers.js";

const cartRouter = Router();

cartRouter.post("/addToCart", postProdToCart);
cartRouter.get("/productsCart", getProductsCart);
cartRouter.post("/checkout", postCheckout)


export default cartRouter;
