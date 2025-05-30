import express from "express";
import { verifyToken } from "../middlewares/verify-token.js";
import {
  createUser,
  forgotPassword,
  getAllUsers,
  googleAuth,
  login,
  resetPassword,
  logout,
  changePassword,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.post("/google-auth", googleAuth);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", resetPassword);
userRouter.post("/change-password", verifyToken, changePassword);
userRouter.post("/logout", logout);

export default userRouter;
