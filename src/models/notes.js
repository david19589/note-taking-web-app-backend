import mongoose from "mongoose";

const { Schema } = mongoose;

const noteSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ type: String }],
  content: { type: String, required: true },
  lastEdited: { type: Date, default: Date.now },
  isArchived: { type: Boolean, default: false },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
