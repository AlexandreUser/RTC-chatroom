const express = require("express");
const routes = express.Router();
const { get } = require("./controller/main.controller");

routes.get("/api/v1/main", get);
module.exports = routes;
