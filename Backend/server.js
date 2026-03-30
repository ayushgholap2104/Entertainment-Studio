const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middle Ware
app.use(cors())
app.use(express.json())

app.get('/',(req,res) =>{
  res.send("Backend is running")
})

// Server
