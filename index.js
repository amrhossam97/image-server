const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

/* var corsOptions = {
  origin: "http://localhost:4200"
}; */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});
/* app.use(cors(corsOptions)); */

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
initRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});