import { Router } from "express";
import {
  postProdToCart,
  getProductsCart,
  postCheckout,
  deleteProductsCart,
} from "../controllers/cart.controllers.js";

const cartRouter = Router();

cartRouter.post("/addToCart", postProdToCart);
cartRouter.get("/productsCart", getProductsCart);
cartRouter.post("/checkout", postCheckout);
cartRouter.delete("/productsCart", deleteProductsCart);

export default cartRouter;
