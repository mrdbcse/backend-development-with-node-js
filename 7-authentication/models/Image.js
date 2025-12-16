const { Schema, model } = require("mongoose");

const ImageSchema = Schema(
  {
    url: { type: String, requied: true },
    publicId: { type: String, requied: true },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamp: true }
);
module.exports = model("Image", ImageSchema);
