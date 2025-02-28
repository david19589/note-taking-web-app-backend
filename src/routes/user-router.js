import express from "express";
import {
  createUser,
  getAllUsers,
  login,
} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/register", createUser);
userRouter.post("/login", login);

export default userRouter;
