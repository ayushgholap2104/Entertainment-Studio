const express = require("express")
const verifytoken = require("../middleware/authMiddleware")
const router = express.Router()

const { 
  signup,
  login,
  login,
  profile
} = require("../controllers/authController")

router.post('/signup',signup)
router.post('/login',login)
router.post('/verify',verify)
router.post('/profile',verifytoken,profile)
module.exports = router
