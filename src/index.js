require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const routes = require("./routes/routes")
const {sequelize} = require("../database/models")

const app = express()
const PORT = process.env.PORT || 8082

sequelize.sync({alter: true}).then(() => {
    console.log("Banco de dados ativo")
}).catch(err => {
    console.error(err)
})

app.use(morgan("dev"))
app.use(routes)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))