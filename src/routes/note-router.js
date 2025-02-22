import express, { Router } from "express";
import {
  deleteNote,
  getAllNotes,
  postNote,
  updateNote,
} from "../controllers/note-controller.js";

const noteRouter = express.Router();

noteRouter.get("/notes", getAllNotes);
noteRouter.post("/notes", postNote);
noteRouter.put("/notes/:id", updateNote);
noteRouter.delete("/notes/:id", deleteNote);

export default noteRouter;
