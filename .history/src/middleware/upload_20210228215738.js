const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
let fileName_2;

let fileName = (id) => {
  this.fileName_2 = id;
  console.log(id);
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    let fileNameSplited = file.originalname.split(".");
    let extension = fileNameSplited[fileNameSplited.length - 1];
    cb(null, this.fileName_2 + "." + extension);
    console.log(this.fileName_2 + "." + extension);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = { uploadFileMiddleware, fileName };
