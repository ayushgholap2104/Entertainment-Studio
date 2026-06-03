const jwt = require("jsonwebtoken")

const verifytoken = (req,res,next) =>{
  const token = req.headers["authorization"]
  if (!token){
    return res.json("Login to continue")
  }
  try {
    const verified = jwt.verify(token,"secretkey")
    req.user = verified
    next()
  } catch (error) {
    res.json("Invalid token")
  }
}
module.exports = verifytoken