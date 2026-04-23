const db = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = (req, res) => {
  const { name, email, password } = req.body
  console.log(req.body)

  db.query(
    "SELECT * FROM users_detail WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json(err)
      }
      if (result.length > 0) {
        return res.json({
          success:false,
          message:"Email already exist"})
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
            res.json({
              success:true,
              message:"User registered successfully"})
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
        return res.json({
          success:false,
          message:"User does not exist"
        })
      }
      const user = result[0]
      try {
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
          return res.json({
            success:false,
            message:"Incorrect password"
          })
        }
        const otp = Math.floor(100000 + Math.random() * 900000)
        db.query(
          "UPDATE users_detail SET otp = ? WHERE email = ?",
          [otp,email]
        ),
        (err)=>{
          if(err){
            res.status(500).json({
              success:false,
              message:"Error sending verification code"
            })
          }
        }
        console.log("OTP:",otp)
        res.json({
          success:true,
          message:"Enter verification code",
          email:email
        })
      } catch (error) {
        res.status(500).json("Error in comparing password")
      }
    }
  )
}