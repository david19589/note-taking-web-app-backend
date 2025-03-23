import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date, index: true },
});

const User = mongoose.model("User", userSchema);

export default User;
