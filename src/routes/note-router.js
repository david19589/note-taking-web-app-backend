import express from "express";
import { getAllNotes } from "../controllers/note-controller.js";

const noteRouter = express.Router();

noteRouter.get("/notes", getAllNotes);

export default noteRouter;
