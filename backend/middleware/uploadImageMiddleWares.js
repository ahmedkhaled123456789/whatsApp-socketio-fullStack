// eslint-disable-next-line import/no-extraneous-dependencies
import multer from "multer";
 
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
 


exports.uploadSingleImage=(fieldName) => multerOption().single(fieldName )



exports.uploadMixOfImages= (arrayFields) =>  multerOption().fields(arrayFields)