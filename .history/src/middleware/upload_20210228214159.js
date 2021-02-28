const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
let fileName_2;

let fileName = (fileName) => {
  fileName_2 = fileName;
  console.log(fileName_2);
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    let fileNameSplited = file.originalname.split(".");
    let extension = fileNameSplited[fileNameSplited.length - 1];
    cb(null, fileName_2 + extension);
    console.log(fileName_2 + extension);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = { uploadFileMiddleware, fileName };
