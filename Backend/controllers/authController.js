const db = require("../config/db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")


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
          success: false,
          message: "Account already exist"
        })
      }
      try {
        const hashedpassword = await bcrypt.hash(password, 10)
        const otp = Math.floor(100000 + Math.random() * 900000)
        db.query(
          "INSERT INTO users_detail (name,email,password,otp) VALUES (?,?,?,?)",
          [name, email, hashedpassword, otp],
          (err) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: "Error creating user"
              })
            }
            console.log("OTP:", otp)
            sendOTP(email, otp)
            res.json({
              success: true,
              message: "OTP sent to your email",
              email: email
            })
          }
        )
      } catch (error) {
        return res.status(500).json("Error hashing password")
      }
    }
  )
}
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users_detail WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json(err)
      }
      if (result.length === 0) {
        return res.json({
          success: false,
          message: "Account does not exist"
        })
      }
      try {
        user = result[0]
        console.log("enteredPassword:", password)
        console.log("dbPassword:", user.password)
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          return res.json({
            success: false,
            message: "Incorrect password"
          })
        }

        if (!user.is_verified) {
          return res.json({
            success: false,
            message: "Please verify your email first"
          });
        }
        const otp = Math.floor(100000 + Math.random() * 900000)
        db.query(
          "UPDATE users_detail SET otp = ? WHERE email = ?",
          [otp, email]
        ),
          (err) => {
            if (err) {
              res.status(500).json({
                success: false,
                message: "Error sending verification code"
              })
            }
          }
        console.log("OTP:", otp)
        sendOTP(email, otp)
        res.json({
          success: true,
          message: "Enter verification code",
          email: email
        })
      } catch (error) {
        res.status(500).json("Error in comparing password")
      }
    }
  )
}
exports.profile = (req, res) => {
  db.query(
    "SELECT * FROM users_detail WHERE email=?",
    [req.user.email],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Something went wrong."
        })
      }

      res.json({
        success: true,
        user: result[0]
      })
    }
  )
}
exports.updateProfile = (req, res) => {
  const {
    genre,
    location,
    instagramId,
    facebookId,
    githubId,
  } = req.body

  const profileImg = req.file ? req.file.filename : null;
  console.log(profileImg)
  
  db.query(
    `
      UPDATE users_detail
      SET genre = ?,
          location = ?,
          instagram = ?,
          facebook = ?,
          github = ?,
          profileImg = ?
      WHERE email =?
    `,
    [genre, location, instagramId, facebookId, githubId, profileImg, req.user.email],
    (err, result) => {
      console.log("userGenre:",genre)
      console.log("userEmail:",req.user.email)
      console.log("userLocation:",location)
      if (err) {
        return res.status(500).json(err)
      }
      db.query(
        "SELECT * FROM users_detail WHERE email = ?",
        [req.user.email],
        (err, result) => {
          console.log("Profile update result:",result)
          if (err) {
            return res.status(500).json(err)
          }

          res.json({
            success: true,
            message:"Profile Updated successfully",
            user: result[0]
          })
        }
      )
    }
  )
}
// OTP send logic
const sendOTP = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ayushgholap2104@gmail.com",
        pass: "wzes oklh vajx thdg"
      }
    })

    await transporter.sendMail({
      from: "ayushgholap2104@gmail.com",
      to: email,
      subject: "Your OTP code",
      text: `Your OTP code for entertainment studio is : ${otp}`
    })
    console.log("OTP is sent to your email")
  } catch (error) {
    console.log("Email err:", error)
  }
}

exports.verify = (req, res) => {
  const { email, otp } = req.body
  console.log('Frontend otp: ', otp)
  // console.log('User Email: ',email )
  db.query(
    "SELECT * FROM users_detail WHERE email =? AND otp = ?",
    [email, otp],
    (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Server error"
        })
      }
      if (result.length > 0) {
        const user = result[0]

        const token = jwt.sign(
          { id: user.id, email: user.email },
          "secretkey",
          { expiresIn: "10d" }
        )
        db.query("UPDATE users_detail SET otp = NULL,is_verified = true WHERE email =?", [email])

        res.json({
          success: true,
          message: "OTP verified",
          token: token
        })
      } else {
        res.json({
          success: false,
          message: "Invalid OTP"
        })
      }
    }
  )
}
exports.userdelete = (req, res) => {
  db.query(
    "DELETE FROM users_detail WHERE email=?",
    [req.user.email],
    (err) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Error while deleting account"
        })
      }

      res.json({
        success: true,
        message: "Account deleted successfully."
      })
    }
  )
}
