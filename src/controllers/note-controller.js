import Note from "../models/notes.js";

export const getAllNotes = async (req, res) => {
  const data = await Note.find();
  return res.json(data);
};
