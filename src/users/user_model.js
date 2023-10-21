const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    gender: { type: String },
    password: { type: String },
    dateOfBirth: { type: String },
    userType: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
