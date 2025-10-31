import express from "express";
import {
  loginUser,
  registerUser,
  loginAdmin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", loginAdmin);

export default userRouter;
