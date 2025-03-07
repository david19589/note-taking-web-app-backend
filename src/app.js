import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import noteRouter from "./routes/note-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import userRouter from "./routes/user-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", noteRouter);
app.use("/api/auth", userRouter);
app.use("/", ...swaggerMiddleware());

app.listen(5000);
