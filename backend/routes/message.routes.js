import express from "express";
import { getMessages, sendMessage,uploadUserImage,resizeImage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id",uploadUserImage,resizeImage, protectRoute, sendMessage);

export default router;
  