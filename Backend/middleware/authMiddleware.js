const jwt = require("jsonwebtoken")

const verifytoken = (req,res,next) =>{
  const token = req.headers["authorization"]
  if (!token){
    return res.status(401).json({
      success:false,
      message:"Please login first"
    })
  }
  try {
    const verified = jwt.verify(token,"secretkey")
    req.user = verified;
    // console.log(req.user);
    next();
  } catch (error) {
    res.json("Invalid token")
  }
}
module.exports = verifytoken