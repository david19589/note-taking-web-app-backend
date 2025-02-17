import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ type: String, required: true }],
  content: { type: String, required: true },
  lastEdited: { type: Date, default: Date.now, required: true },
  isArchived: { type: Boolean, required: true },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
