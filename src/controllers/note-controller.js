import Note from "../models/notes.js";

export const getAllNotes = async (req, res) => {
  try {
    const data = await Note.find({ userId: req.user.userId });
    return res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notes", err });
  }
};

export const postNote = async (req, res) => {
  try {
    const { title, tags, content, isArchived } = req.body;

    const newNote = new Note({
      title,
      tags,
      content,
      isArchived,
      userId: req.user.userId,
    });

    const savedNote = await newNote.save();
    res.status(200).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: "Error creating note", err });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body, lastEdited: new Date() };
    const updatedNote = await Note.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (err) {
    console.error("Error updating note", err);
    res.status(500).json({ message: "Error updating note", err });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("Error deleting note", err);
    res.status(500).json({ message: "Error deleting note", err });
  }
};
