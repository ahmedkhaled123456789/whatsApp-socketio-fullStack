import mongoose from "mongoose";
import path from "path";

// Define the schema for the message
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    // createdAt and updatedAt are added automatically by timestamps: true
  },
  { timestamps: true }
);

// Function to check if the message is a file path or text
const isFilePath = (message) => {
  const fileExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg"];
  const ext = path.extname(message).toLowerCase();
  return fileExtensions.includes(ext);
};

// Function to set the full image URL if the message is an image file
const setImageUrl = (doc) => {
  if (isFilePath(doc.message)) {
    const imageUrl = `${process.env.BASE_URL}/${doc.message}`;
    doc.message = imageUrl;
  }
};

// Mongoose hook to set image URL after initializing the document
messageSchema.post("init", (doc) => {
  setImageUrl(doc);
});

// Mongoose hook to set image URL after saving the document
messageSchema.post("save", (doc) => {
  setImageUrl(doc);
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
