import express from "express";
import {
  createUser,
  forgotPassword,
  getAllUsers,
  login,
  resetPassword,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
