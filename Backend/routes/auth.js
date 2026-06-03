const express = require("express")
const verifytoken = require("../middleware/authMiddleware")
const router = express.Router()

const {signup} = require("../controllers/authController")
const {login} = require("../controllers/authController")
const {verify} = require("../controllers/authController")
const {profile} = require("../controllers/authController")

router.post('/signup',signup)
router.post('/login',login)
router.post('/verify',verify)
router.get('/profile',verifytoken,profile)
module.exports = router
