import express from "express";
import { login, logout, signup,uploadUserImage,resizeImage } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",uploadUserImage,resizeImage, signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
 