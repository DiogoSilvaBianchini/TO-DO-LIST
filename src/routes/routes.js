const express = require("express")
const userRoutes = require("./userRoutes")
const taskRoutes = require("./taskRoutes")
const routes = express.Router()

routes.get("/", (req,res) => {
    return res.status(200).json({msg: "Servidor ativo", status: 200})
})

routes.use("/user", userRoutes)
routes.use("/tasks", taskRoutes)

module.exports = routes