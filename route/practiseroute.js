const { createUser, DelUser, Updateuser, CreateUser } = require("../controller/practisecontroller");
const express = require("express").Router();

express.post("/createUser", CreateUser);
express.post("/DelUser", DelUser);
express.post("/Updateuser", Updateuser);

module.exports = express;
