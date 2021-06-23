const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.once("open", () => {
  console.log("Connected to database")
})

db.on("error", (err) => {
  console.log(err)
})

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ hello: "world" })
}) 

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`)
})