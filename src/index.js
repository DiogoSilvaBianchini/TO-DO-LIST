require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const routes = require("./routes/routes")

const app = express()
const PORT = process.env.PORT || 8082

app.use(morgan("dev"))
app.use(routes)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))