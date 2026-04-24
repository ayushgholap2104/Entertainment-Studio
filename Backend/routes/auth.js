const express = require("express")
const router = express.Router()

const { signup } = require("../controllers/authController")
const {login} = require("../controllers/authController")
const {verify} = require("../controllers/authController")

router.post('/signup',signup)
router.post('/login',login)
router.post('/verify',verify)
module.exports = router
