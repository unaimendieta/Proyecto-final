const express = require("express");
const userRoutes = express.Router();
const controller = require("../controllers/user.controller");


userRoutes.patch("/update", controller.updateUser);
userRoutes.get("/getById/:id", controller.getUserById);
module.exports = userRoutes;