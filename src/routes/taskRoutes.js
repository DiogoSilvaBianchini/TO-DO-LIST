const express = require("express")
const TaskController = require("../controller/TaskController")
const routes = express.Router()

routes.get("/", TaskController.findAllTasks)
routes.post("/", express.json(), TaskController.createNewTask)
routes.delete("/:id", express.json(), TaskController.removeTask)

module.exports = routes