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
const PORT = 5000;
app.listen(PORT , () =>{
  console.log(`Server running on port ${PORT}`)
})
require("./config/db")

const authRoutes = require("./routes/auth")
app.use('/api/auth',authRoutes)
