import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
