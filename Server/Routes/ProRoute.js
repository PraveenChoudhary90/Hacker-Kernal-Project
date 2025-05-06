const express = require("express");
const route = express.Router();
const ProController = require("../Controller/ProController");


route.post("/login", ProController.Login);
route.post("/insertdata", ProController.InsertData);
route.get("/display", ProController.DisplayData);
route.post("/search", ProController.SearchData);






module.exports = route;