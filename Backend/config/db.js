const mysql = require("mysql2")

// Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Ayush2104',
  database: 'ott_platform'
})

db.connect((err)=>{
  if (err){
    console.log("Database Connection Failed",err)
  }else{
    console.log("Database Connection Successful")
  }
})
module.exports = db;