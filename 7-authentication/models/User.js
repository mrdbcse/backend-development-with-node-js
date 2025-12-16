const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String, requied: true, unique: true, trim: true },
    email: {
      type: String,
      requied: true,
      unique: true,
      trim: true,
      lowecase: true,
    },
    password: { type: String, requied: true },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
