const express = require("express")
const UserController = require("../controller/UserController")
const { encryptPassword } = require("../middlewares/middlewares")
const routes = express.Router()

routes.get("/", UserController.findAllUsers)
routes.post("/", express.json(), encryptPassword, UserController.createNewUser)
routes.delete("/", UserController.removeUser)

module.exports = routes