const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    phone_number: { type: String },
    gender: { type: String },
    password: { type: String },
    date_of_birth: { type: String },
    user_type: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
