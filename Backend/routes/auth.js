const express = require("express")
const verifytoken = require("../middleware/authMiddleware")
const router = express.Router()

const {signup} = require("../controllers/authController");
const {login} = require("../controllers/authController");
const {verify} = require("../controllers/authController");
const {profile} = require("../controllers/authController");
const {userdelete} = require("../controllers/authController");
const upload = require("../middleware/Uploads");
const {updateProfile} = require("../controllers/authController");



router.post('/signup',signup);

router.post('/login',login);

router.post('/verify',verify);

router.get('/profile',verifytoken,profile);

router.patch(
  '/profile',
  verifytoken,
  upload.single("profileImg"),
  updateProfile
);

router.delete('/userdelete',verifytoken,userdelete);

module.exports = router
