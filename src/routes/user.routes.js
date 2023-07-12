import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaSingIn, schemaSingUp } from "../schemas/user.schemas.js";
import { signIn, signUp } from "../controllers/user.controllers.js";

const userRouter = Router()

userRouter.post('/sign-up', validateSchema(schemaSingUp), signUp);
userRouter.post('/sign-in', validateSchema(schemaSingIn), signIn);

export default userRouter;