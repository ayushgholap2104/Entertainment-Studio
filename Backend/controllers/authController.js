const db = require("../config/db")

exports.signup = (req,res)=>{
  const { name, email, password} = req.body

  db.query(
    "INSERT INTO users_detail (name,email,password) VALUES (?,?,?)",
    [name, email, password],
    (err,result) =>{
      if (err){
        return res.status(500).json(err)
      }

      res.json("User registered successful")
    }
  )
}