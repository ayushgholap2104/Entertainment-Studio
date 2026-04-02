const db = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = (req, res) => {
  const { name, email, password } = req.body

  db.query(
    "SELECT * FROM users_detail WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json(err)
      }
      if (result.length > 0) {
        return res.json("Email is already exist")
      }
      try {
        const hashedpassword = await bcrypt.hash(password,10)
        db.query(
          "INSERT INTO users_detail (name,email,password) VALUES (?,?,?)",
          [name, email, hashedpassword],
          (err, result) => {
            if (err) {
              return res.status(500).json(err)
            }
            res.json("User registered successfully")
          }
        )
      } catch (error) {
        return res.status(500).json("Error hashing password")
      }
    }
  )
}
exports.login = (req,res) =>{
  const {email,password} = req.body
  db.query(
    "SELECT * FROM users_detail WHERE email = ?",
    [email],
    async (err,result) =>{
      if (err){
        return res.status(500).json(err)
      }
      if (result.length ===0){
        return res.json("User does not exist")
      }
      const user = result[0]
      try {
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
          return res.json("Incorrect password")
        }
        const token = jwt.sign(
          {id :user.id, email:user.email},
          "secretkey",
          {expiresIn:"24h"}
        )
        res.json({
          Message:"Login successful",
          token:token
        })
      } catch (error) {
        res.status(500).json("Error in comparing password")
      }
    }
  )
}