import bcrypt from "bcryptjs";
import sharp from "sharp";
import { v4 as uuidv4, v4 } from "uuid";
import multer from "multer";

 import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
 
 
const multerOption = () =>{
  // memoryStorage
  const multerStorage = multer.memoryStorage();
  
  const multerfilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
   
    }
  };
  const upload = multer({ storage: multerStorage, fileFilter: multerfilter });
  
  return upload;
  }
  export const uploadUserImage = multerOption().single("profileImg" )
  

export const resizeImage = (req, res, next) => {
  if (req.file) {
    const fileName = `Users-${uuidv4()}-${Date.now()}.jpeg`;
      sharp(req.file.buffer)
      .resize(1200, 1200)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`uploads/${fileName}`); 
    req.body.profileImg = fileName;
  }
  next();
}; 


// Signup Controller
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender,profileImg} = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
// https://avatar-placeholder.iran.liara.run/

const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    

    const newUser = new User({
      fullName, 
      username,
      password: hashedPassword,
      gender,
      profileImg,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
      createdAt: new Date(),
    });

    await newUser.save();

    generateTokenAndSetCookie(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profileImg: newUser.profileImg,
      profilePic: newUser.profilePic,
      createdAt: newUser.createdAt,
    });
  } catch (error) {
    console.error("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login Controller
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = user && await bcrypt.compare(password, user.password);

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Logout Controller
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
