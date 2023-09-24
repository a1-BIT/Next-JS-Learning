import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  email: {
    type: String,
    requird: [true, "Please provide password"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpary: Date,
  verifyToken: String,
  verifyTokenExpary: Date,
});

const User = mongoose.model.users || mongoose.model("usera", userSchema);

export default User;
