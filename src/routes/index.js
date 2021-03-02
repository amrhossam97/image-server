const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/upload/:id", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  router.get("/", controller.Home);

  app.use(router);
};

module.exports = routes;
