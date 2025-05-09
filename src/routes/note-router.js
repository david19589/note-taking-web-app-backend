import express from "express";
import { verifyToken } from "../middlewares/verify-token.js";
import {
  deleteNote,
  getAllNotes,
  postNote,
  updateNote,
} from "../controllers/note-controller.js";

const noteRouter = express.Router();

noteRouter.get("/notes", verifyToken, getAllNotes);
noteRouter.post("/notes", verifyToken, postNote);
noteRouter.put("/notes/:id", verifyToken, updateNote);
noteRouter.delete("/notes/:id", verifyToken, deleteNote);

export default noteRouter;
