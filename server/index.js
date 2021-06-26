const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")

const app = express()
require("dotenv").config()
const server = require("http").createServer(app)
const { Server } = require("socket.io")

const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

io.on("connection", (socket) => {
  console.log(socket.id)
})

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
const userCollection = db.collection("users")

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

app.post("/hello", (req, res) => {
  const { username, password } = req.body
  userCollection.find
})

server.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`)
})